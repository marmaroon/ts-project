let msg: 'Hello' = 'Hello' // литеральный тип

msg = 'Hello';

const port3000: number = 3000;
const port3001: number = 3001;

function startServer(
    protocol: 'http' | 'https',
    port: 3000 | 3001
): 'Server started' {
    if (port === port3000 || port === port3001) { // когда динамически подставляется, то лучше проверять условиями
        console.log(`Server started on ${protocol}://server:${port}`);
    } else {
        console.error('Invalid port');
    }

    return 'Server started'
}

startServer('https', 3001)

// псевдонимы типов, для переиспользования? 
type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
type AnimationID = string | number

// работа с dom элементами
function createAnimation(id: AnimationID,
    animName: string,
    timingFunc: AnimationTimingFunc = 'ease',
    duration: number,
    iterCount: 'infinite' | number
): void {
    // const elem = document.querySelector(`#${id}`) as HTMLElement; // конкретно прописываем что это html элемент
    // if (elem) {
    console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);

    // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`; // если элемент не найден на странице, то он заменяется на null
    // }

}

createAnimation('id', 'fade', 'ease-in', 5, 'infinite')