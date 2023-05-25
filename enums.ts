const TOP = 'Top'
const RIGHT = 'Right'

enum Directions {
    TOP,
    RIGHT,
    LEFT,
    BOTTOM
}

const enum TimingFunc { 
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