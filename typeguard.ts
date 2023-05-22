function printMsgNew(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach(m) => console.log(m);
    } else if (isNumber(msg)) {
        console.log(msg);
    } else {
        console.log(msg);
    }
    console.log(msg);
}

printMsgNew(4)

function isNumber(n: string[] | number | boolean): n is number { //тоже самое что логическое значение
    return typeof n === 'number'
}

interface Car {
    name: 'car'
    engine: string,
    wheels: {
        number: number,
        type: string
    }
}

interface Ship {
    name: 'ship'
    engine: string,
    sail: string
}

interface Airplane {
    name: 'airplane'
    engine: string,
    wings: string
}

interface ComplexVehicle {
    name: 'car' | 'ship' | 'airplane'
    engine: string
    wheels?: number
    wings?: string
    sail?: string
}

type Vehicle = Car | Ship | Airplane

const car: ComplexVehicle = {
    name: 'car',
    engine: 'V8'
}

function repair(vehicle: ComplexVehicle) {
    // if (isCar(vehicle)) {
    //     vehicle.wheels
    // } else if (isShip(vehicle)) {
    //     vehicle
    // } else {
    //     vehicle //type never
    // }

    switch (vehicle.name) {
        case 'car':
            console.log(vehicle.wheels! * 2);
            break;
        case 'ship':
            console.log(vehicle.sail);
            break;
        case 'airplane':
            console.log(vehicle.wings);
            break;
        default:
            const smth: never = vehicle.name // конструкция для never  
            console.log('Error');
    }
}

function isCar(car: Vehicle): car is Car { //type guard
    return (car as Car).wheels.number !== undefined
}

function isShip(ship: Vehicle): ship is Ship {
    return (ship as Ship).sail !== undefined
    return 'sail' in ship
}