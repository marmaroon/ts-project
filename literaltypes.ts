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

function createAnimation(id: string | number,) {
    const elem = document.querySelector(`#${id}`);
    elem.style.animation = '';
    
}