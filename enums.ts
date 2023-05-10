const TOP = 'Top'
const RIGHT = 'Right'

enum Directions { // в чем разница, если мы можем использовать type или interface?
    TOP,
    RIGHT,
    LEFT,
    BOTTOM
}

const enum TimingFunc { // через const быстрее выполняется, но в документации напсиано лучше не использовать
    EASE = 'ease',
    EASE_IN = `${EASE}-in`,
    LINEAR = 'linear',
}

function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
    if(dir === Directions.RIGHT) {
        console.log(tFunc);
        
    }
}

frame('id', Directions.RIGHT, TimingFunc.EASE)