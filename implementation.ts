interface IUser {
    login: string,
    password: string
    token?: number
}

interface IValidation {
    valid: boolean;
    isValid: (data: string) => boolean;
}

class UserForm implements IUser, IValidation { //описание того, что должно быть внутри класса
    login!: string;
    password!: string;
    valid: boolean = false;
    token!: number

    isValid(login: string) {
        return login.length > 3
    }
}