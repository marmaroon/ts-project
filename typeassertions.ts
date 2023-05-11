const fetchDataNew = (url: string, method: "GET" | "POST"): void => {
    console.log(method);
}

const reqOptions = {
    url: 'https://someurl.com',
    method: 'GETasas' as 'GET'
 } //as const

 fetchDataNew('qqq', 'GET')
 // fetchDataNew(reqOptions.url, reqOptions.method)
 fetchDataNew(reqOptions.url, <'GET'>reqOptions.method)


const box = document.querySelector('.box') as HTMLElement;
const input = document.querySelector('input') as HTMLInputElement;

const someNumber: number = input.value as any as number; //либо через +
console.log(someNumber);
