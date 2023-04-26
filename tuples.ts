//spread оператор, если мы хотим обозначить что будет несколько значений дальше, можно добавлять только 1 оператор в какой угодно последовательности
const userDataTuple: [boolean, number, ...string[]] = [true, 40, 'John', 'Alex', 'Ann'] //кортеж нужен для записи данных в строго определннном порядке
// userDataTuple[5] = 
// userDataTuple.push(50)
// userDataTuple[5]
const res = userDataTuple.map((t) => `${t} - data`)

const [brthdt, age, userName] = userDataTuple; // деструтуризация

