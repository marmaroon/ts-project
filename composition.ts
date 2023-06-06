import "reflect-metadata";
const limitMetadataType = Symbol('limit')

//class-validator
interface ICar {
    fuel: string,
    open: boolean,
    freeSeats: number
}

// changeDoorStatus(changeFuel(myCar))
@changeDoorStatus(false)
@changeFuel(95)
class myCar implements ICar {
    fuel: string = '50';
    open: boolean = true;
    errors: any;
    _weight: number = 1000;

    @log //он будет применяться и к одному, и к другому
    set weight(num: number) {
        this._weight = this._weight + num
    }

    get weight() {
        return this._weight
    }

    @checkNumberOfSeats(4)
    freeSeats: number;

    @checkAmountOfFuel
    isOpen(value: string) {
        return this.open ? 'open' : `close ${value}`
    }

    @validate
    startTravel(@limit passengers: number) {
        console.log(`Started with ${passengers} passengers`);
    }
}

function limit(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
) {
    let limitedParams: number[] = Reflect.getOwnMetadata(limitMetadataType, target, propertyKey) || []
    limitedParams.push(parameterIndex)
    Reflect.defineMetadata(limitMetadataType, limitedParams, target, propertyKey)
}

//декоратор аксессоров
function log(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
): PropertyDescriptor | void {
    const oldValue = descriptor.set
    const oldGet = descriptor.get
    descriptor.set = function (this: any, ...args: any) {
        console.log(`Изменяем значение на  ${[...args]}`);
        return oldValue?.apply(this, args)
    }
    descriptor.get = function (this: any, ...args: any) {
        console.log(`Test`);
        return oldGet?.apply(this, args)
    }
}

function validate(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) {
    let method = descriptor.value;
    descriptor.value = function(... args: any) {
        let limitedParams: number[] = Reflect.getOwnMetadata(limitMetadataType, target, propertyKey)

        if(limitedParams) {
            for (let index of limitedParams) {
                if (args[index] > 4) {
                    throw new Error('Нельзя больше 4-х пассажиров')
                }
            }
        }
        return method?.apply(this, args)
    }
}

// декоратор свойств
function checkNumberOfSeats(limit: number) {
    return function (target: Object, propertyKey: string | symbol) {
        let symbol = Symbol()

        const getter = function (this: any) {
            return this[symbol];
        }

        const setter = function (this: any, newAmount: number) {
            if (newAmount >= 1 && newAmount < limit) {
                this[symbol] = newAmount + 1;
            } else {
                Object.defineProperty(target, 'errors', { //привязываем свойство к прототипу класса и оно доступно во всех экземплярах
                    value: `Больше ${limit} сидений быть не может`
                })
            }
        }
        // взяли свойство, к которому применили декоратор  и изменили то, как оно себя ведет при получении и установке этого значения
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}

//декоратор метода принимает 3 аргумента
function checkAmountOfFuel(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
): PropertyDescriptor | void {
    // модифицируем метод
    const oldValue = descriptor.value // сохранили ссылку на старую функцию
    descriptor.value = function (this: any, ...args: any[]) { //добавляем аргументы
        console.log(this.fuel);
        return oldValue.apply(this, args) //возвращаем старую функцию
    }
}

//фабрика декораторов
function changeDoorStatus(status: boolean) {
    return <T extends { new(...args: any[]): {} }>(
        constructor: T
    ) => {
        return class extends constructor {
            open = status;
        }
    }
}
//декоратор класса
function changeFuel(amount: number) {
    return <T extends { new(...args: any[]): {} }>(
        constructor: T
    ) => {
        return class extends constructor {
            fuel = `${amount}%`
        }
    }
}

//декоратор
function closeCar<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        open = false
    }
    constructor.prototype.open = false //через прототип, потому что мы декорируем класс, а не конкретный объект
}

// function addFuel(car: myCar) {cc
//     car.fuel = '100%'
//     return car
// }

const car = new myCar()
car.startTravel(3)
// console.log(carNew.errors);

