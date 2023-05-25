// SomeType extends OtherType TrueType ? : FalseType;
const str = 'Hello'
type Example = 'Hello' extends typeof str ? string : number

type FromUserOrFromBase<T extends string | number> = T extends string
    ? IDataFromUser
    : IDatafromBase

interface UserN<T extends 'created' | Date> {
    created: T extends 'created' ? 'created' : Date
}

const userN: UserN<'created'> = {
    created: 'created'
}

interface IDataFromUser {
    weight: string;
}

interface IDatafromBase {
    calories: number;
}
// function calculateDailyCalories(str: string): IDataFromUser;
// function calculateDailyCalories(num: number): IDatafromBase;
function calculateDailyCalories<T extends string | number>(numOrStr: T): T extends string ? IDataFromUser : IDatafromBase {
    if (typeof numOrStr === 'string') {
        const obj: IDataFromUser = {
            weight: numOrStr
        };
        return obj as FromUserOrFromBase<T>;
    } else {
        const obj: IDatafromBase = {
            calories: numOrStr
        };
        return obj as FromUserOrFromBase<T>
    }
}

type GetStringType<T extends 'hello' | 'world' | string> = T extends 'hello' 
? 'hello' 
: T extends 'world' 
? 'world' 
: string

type GetFirstType<T> = T extends Array<infer First> ? First : T;

type Ex = GetFirstType<number[]>

type ToArray<Type> = Type extends any ? Type[] : never

type ExArray = ToArray<Ex | string>