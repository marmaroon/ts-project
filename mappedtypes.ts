// type СопоставимыйТип = {
//     [ПроизвольныйИдентификатор in Множество] : ПроивзольныйТипДанных

interface Currencies {
    usa: 'usd'
    china: 'cny'
    ukraine: 'uah'
    kz: 'tenge'
}

type CurrWithoutUSA = Omit<Currencies, 'usa'> // исключение
type Curr2Countries = Pick<Currencies, 'usa' | 'ukraine'> // фильтрация по свойству
type CountriesWithoutUSA = Exclude<keyof Currencies, 'usa'>
 

type FadeType = Exclude<MyAnimation, 'swipe'> // удаление из union type
type SwipeType = Extract<MyAnimation | Direction, 'swipe'> //выбор подходящего типа

type CreateCustomCurr<T> = {
    [P in keyof T as `custom${Capitalize<string & P>}`]: string // получаем все свойства объекта 
}                    //intersection с P, мы говорим что это точно будет string

type PlayersNames = 'alex' | 'john'
type CustomCurrencies = CreateCustomCurr<Currencies>
type GameDataCurr = Record<PlayersNames, CustomCurrencies> //объект с ключами

const gameData: GameDataCurr = {
    alex: {
        customChina: 'qqqq',
        customUkraine: 'qqq',
        customUsa: 'qwq',
        customKz: 'qqwe'
    },
    john: {
        customChina: 'qqqq',
        customUkraine: 'qqq',
        customUsa: 'qwq',
        customKz: 'qqwe'
    }
}

// Template Literal Type

type MyAnimation = 'fade' | 'swipe'
type Direction = 'in' | 'out'

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`



type Keys = 'name' | 'age' | 'role'

type UserOne = {
    [K in Keys] : string
}

const alex: UserOne = {
    name: 'ALex',
    age: '25',
    role: 'admin'
}