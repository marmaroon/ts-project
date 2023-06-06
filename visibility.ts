function setName() {
    return 'Dota'
}

class Player {
    private static game: string = 'Dota' //свойство для всего класса без создания экземпляра класса
    private login!: string; // нельзя изменить снаружи, но при этом оно не наследуется
    private _password!: string;
    public server!: string; // по умолчанию
    protected consent!: boolean //наследуется

    constructor(login: string) {
        this.login = login;
    }

    static { //статичный блок
        Player.game = setName()
    }

    get password() { //геттеры и сеттеры публичные, а само свойство password приватное, снаружи не можем изменить
        return this._password
    }

    set password(newPass: string) {
        // какая-то валидация
        this._password = newPass
    }

    static getGameName() {
        return Player.game
    }
// можно через стрелочную функцию привязывать контекст к экземпляру
    // logIn = () => {
    //     return `Player ${this.login} online`
    // }

    logIn(this: Player) {
        return `Player ${this.login} online`
    }

    connect() {
        // do smth
        return this;
    }

//type guard
    isPro(): this is CompetitivePlayer {
        return this instanceof CompetitivePlayer;
    }
}

//const testNew = player.logIn.bind(player) //првязываем контекст к объекту
// testNew()


class CompetitivePlayer extends Player {
    rank!: number

    checkLogin() {
        return super.logIn() // при наследовании со стрелочной функцией поменять на this.
    }

    private isConsented() {
        this.consent ? 'Yes': 'No'
    }
}

const player = new Player('test')
console.log(player.connect().logIn()); //chaining

const player2 = new CompetitivePlayer('Test2');
console.log(player2.checkLogin())

const somePlayer: Player | CompetitivePlayer = new CompetitivePlayer('Test3')
somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer);

