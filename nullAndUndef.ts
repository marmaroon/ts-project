const test: null = null;
const test2: any = null;
const test3: string = null;
const test4: number = null;

const test5: undefined = undefined
const test6: any = undefined
const test7: string = undefined

let smth; //type any

function getRndData() {
    if (Math.random() > 0.5) {
        return null
    } else {
        return '  Some data   '
    }
}

const data1 = getRndData();
const trimmedData = data ? data1.trim(): null