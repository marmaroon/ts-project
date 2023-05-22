function processingData<T, S>(data: T[], options: S): string {
    data.length
    switch (typeof data) {
        case 'string':
            return `${data}, speed ${options}`
            break;
        case 'number':
            return `${data}, speed ${options}`
            break;
        default: 
        return 'Not valid'
    }
}

let res1 = processingData([1], 'fast')
let res2 = processingData(['1'], 'slow')

const num0 = '10'

const res3 = processingData<number, string>([10], 'value')


function processing<T>(data: T): T {
    return data
}

interface ProcessingFnc {
    <T>(data: T): T
}

let newFunc: ProcessingFnc = processing //???

type Smth <T> = T

const numNew: Smth<number> = 5

interface ParentsOfUser {
    mother: string,
    father: string
}

interface UserNew<ParentsData extends ParentsOfUser> { //дженерик наследует интерфейс, который мы прописали, потому что мы хотим чтоб передавалсыяы только обхект
    login: string,
    age: number,
    parents: ParentsData
}

const userNew: UserNew<{mother: string, father: string, married: true}> = {
    login: 'user',
    age: 2,
    parents: {mother: 'Anna', father: 'John', married: true}
}

//helpers
type OrNull <Type> = Type | null
type OneOrMany <Type> = Type | Type[]

const dataOne: OneOrMany<number[]> = [5]

const depositMoney = <T extends number | string>(amount: T): T => {
    console.log(`req to server with amount ${amount}`);
    return amount
}

depositMoney(500)
depositMoney('5000')


interface DataSaver {
    processing: ProcessingFnc
}

const saver : DataSaver = {
    // processing(data) {
    //     console.log(data);
    //     return data
    // }
    processing: processing
    }

interface PrintUK {
    design: number
}

interface PrintES {
    design: string
}

interface Print<T> {
    design: T
}

const somePrint: Print<number> = {
    design: 10
}

const somenewPrint: Print<string> = {
    design: '12'
}




class Customer<T,S> {
    name: T
    age: S

    constructor(name: T, age: S) {
        this.name = name
        this.age = age
    }
}

const ivan = new Customer('Ivan', 30)
console.log(ivan);

const nameData - 

const john = new Customer<string, number>('John', 25)
