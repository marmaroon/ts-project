let msg: 'Hello' = 'Hello' // литеральный тип

msg = 'Hello';

// type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 } //описание шаблона
// type Role = {
//     role: string;
// }
// type ConfigWithRole = Config & Role; // пересечение типов

// INTERFACES
interface Config {
    protocol: 'http' | 'https';
    port: 3000 | 3001,
    log: (msg: string) => void
}

interface Role {
    role: string;
}


interface ConfigWithRole extends Config, Role {
    test: string
}


const serverConfig: ConfigWithRole = { // определенный объект, подходящий под шаблон
    protocol: 'https',
    port: 3001,
    role: 'admin',
    test: 'string',
    log: (msg: string): void => console.log(msg)
}

// const backupConfig: ConfigWithRole = {
//     protocol: 'http',
//     port: 3000,
//     role: 'sysadmin'
// }

type StartFunction = (
    protocol: 'http' | 'https',
    port: 3000 | 3001,
    log: (msg: string) => void
) => string;

// объектные литералы
const startServer: StartFunction = (
    protocol: 'http' | 'https',
    port: 3000 | 3001,
    log: (msg: string) => void
): 'Server started' => {
    log(`Server started on ${protocol}://server:${port}`);
    return 'Server started'
}

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log)

// индексные свойства
interface Styles {
    [key: string]: string //ключ, который будет string и каждое из свойств будет string?
}

const styles: Styles = {
    position: 'absolute',
    top: '20px',
    left: '50px'
}

// псевдонимы типов (Type Aliases), можно переиспользовать 
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

