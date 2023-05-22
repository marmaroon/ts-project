interface User {
    readonly login: string,
    password: string,
    age: number,
    // addr?: string;
    readonly addr?: string | undefined;
    parents?: {
        mother?: string,
        father?: string
    }
}

const user: User = {
    login: 'frst',
    password: 'qwerty',
    age: 50,
    addr: 'asdad'
}

//generic
const userFreeze: Readonly<User> = {
    login: 'frst',
    password: 'qwerty',
    age: 50
}

let dbName: string;
sendUserData(user, 'wedwer')

console.log(dbName); //non null, точно существует, например, когда функция синхронна


function sendUserData (obj: User, db?: string): void {
    dbName = '12345'
    console.log(obj.parents!.father?.toLocaleLowerCase(), db!.toLowerCase());
    
}

// нельзя менять
user.login = 'qwe'

const basicPorts: ReadonlyArray <number> = [3000, 3001, 5555];
basicPorts[0] = 5;
basicPorts.push(566);

// const basicPorts: readonly [number, ...string[]] = [3000, '3001', '5555'];
// basicPorts[0] = 5;
// basicPorts.push(566);
