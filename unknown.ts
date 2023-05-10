// let smth1: unknown;
// smth = 'str';

// let data1: string[] = smth;
// data1.find(e => e);

// const someValue: unknown = 10;
// someValue.method();

function fetchData(data: unknown): void {
    if (typeof data === 'string') {
        console.log(data.toLowerCase());
        
    }
}

const userDataNew = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}'

function safeParse (s: string) : unknown { // здесь мы прописываем чтобы он вернул именно в unknown, а не в any?
    return JSON.parse(s)
}

const dataNew = safeParse(userDataNew)

function transferData(d: unknown): void {
    if(typeof d === 'string') {
        console.log(d.toLowerCase());
    } else if (typeof d === 'object' && d) {
        console.log(dataNew);
    } else {
        console.error('Some error');        
    }
}

transferData(dataNew)

type T0 = any | unknown;
type T1 = number | unknown;
