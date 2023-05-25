class Player {
    private login!: string; // нельзя изменить снаружи, но при этом оно не наследуется
    private _password!: string;
    public server!: string; // по умолчанию
    protected consent!: boolean //наследуется

    get password() { //геттеры и сеттеры публичные, а само свойство password приватное, снаружи не можем изменить
        return this._password
    }

    set password(newPass: string) {
        // какая-то валидация
        this._password = newPass
    }
}

class CompetitivePlayer extends Player {
    rank!: number

    private isConsented() {
        this.consent ? 'Yes': 'No'
    }
}

const player = new CompetitivePlayer();
player.password = '123123q'
player.consent

// class UserPlay {
//     public email!: string;
//     public name!: string

//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }

class UserPlay {
    constructor(public email: string, public name: string) {} //эквивалентно предыдущему, но короче
}

