//let userName: string = 'Ivan'


// function logMsg(isBirthday: boolean, userName: string, age: number): string { //всегда ли нужно прописывать тип возвращаемого значения? почему при void в консоли браузера все равно возвращается undefined?
//     if (isBirthday) {
//        return (`Congrats ${userName.toUpperCase()}, age ${age + 1}`);
//     } else {
//         return 'Error';
//     }
// }

// const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}' // тип any, потому что в json мб все что угодно

// const userObj: { //добавляем аннотацию к объекту
//     isBirthdayData: boolean, 
//     userNameData: string, 
//     ageData: number
// } = JSON.parse(userData);

// void - либо ничего не возвращает, либо возвращает undefined
// never - ничего не присваивается и ничего не возвращает, подходит для выброса ошибок и для запуска синхронного кода, который никогда не завершится (например while (true), либо рекурсий (в теории)
// null - когда ничего нет 
// indefined - переменная есть, но она не определена


const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'John'

const userData = { // мы не можем назначить тип данных внутри объекта, но можем назначить тип данных в функции, принимающей этот объект?
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'John',
    messages: { // можем передать объект шире, чем написано в аннотации
        error: 'Error',
    },
}

const createError = (msg: string) => { // type never
    throw new Error(msg);
}

const logMsg = ({ isBirthdayData, userNameData, ageData, messages: { error } }: { // деструктуризация
    isBirthdayData: boolean;
    userNameData: string
    ageData: number;
    messages: { error: string }
}): string => {
    if (isBirthdayData) {
        return (`Congrats ${userNameData.toUpperCase()}, age ${ageData + 1}`);
    } else {
        return createError(error);
    }
}

console.log(logMsg(userData));

const departments: string[] = ['dev', 'design', 'marketing']; // тип массив, состоящий из строковых типов данных

const department = departments[0];

// departments.push(5)
const report = departments
    .filter((d: string) => d!== 'dev')
    .map(d => `${d} - done`)

const nums: number[][] = [[3, 6, 8], [3, 6, 8]]; // матрица - массив, в котором есть другие подмассивы с данными

const [first] = report; //деструтуризация массива, вытаскиваем первый элемент
console.log(first);
