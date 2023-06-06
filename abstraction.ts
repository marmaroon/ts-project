interface IEngine {
    model: string;
    capacity: number;
    startEngine: (time: Date) => string
}

//некий шаблон для остальных классов, если мы имплеменируем интерфейс, то мы бы не смогли передать готовые методы, ведь там только типы
abstract class AbstractVahicle { 
    model!: string;
    capacity!: number;
    abstract startEngine: (time: Date) => string
    stopEngine(time: Date): string {
        this.startEngine(new Date()) // почему мы можем обратиться к этому методу? он ведь еще не создан
        return 'Engine stopped'
    }
}

class VehicleNew extends AbstractVahicle { //можно ли считать это override?
    startEngine = (time: Date) => {
        return 'Started'
    };
}

new VehicleNew()
