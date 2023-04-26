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

//spread оператор, если мы хотим обозначить что будет несколько значений дальше, можно добавлять только 1 оператор в какой угодно последовательности
const userDataTuple: [boolean, number, ...string[]] = [true, 40, 'John', 'Alex', 'Ann'] //кортеж нужен для записи данных в строго определннном порядке
// userDataTuple[3] = 
// userDataTuple.push(50)
// userDataTuple[3]
const res = userDataTuple.map((t) => `${t} - data`)

const [brthdt, age, userName] = userDataTuple; // деструтуризация

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

const report = departments
    .filter((d: string) => d!== 'dev')
    .map(d => `${d} - done`)

const nums: number[][] = [[3, 6, 8], [3, 6, 8]]; // матрица - массив, в котором есть другие подмассивы с данными

const [first] = report; //деструтуризация массива, вытаскиваем первый элемент
console.log(first);
