const arr: Array<number> = [1,2,3];
const arr1: number[] = [1,2,3];

const roarr: ReadonlyArray<string> = ['asdad']

interface IState {
    readonly data: { //нельзя менять
        name: string
    }
    tag?: string
}

const state: Partial <IState> = { //partial - делает все свойства внутри объекта необязательные
    data: {
        name: 'John'
    }
}

const strictState: Required<IState> = { // required - все свойства внутри объекта делает обязательным
    data: {
        name: 'asds'
    },
    tag: 'asdasd'
}

function action(state: Readonly<IState>) { //readonly распространяется только на верхний уровень
    state.data.name = 'abc'
}

