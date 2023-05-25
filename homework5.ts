interface FitnessClass {
    name: string,
    startsAt: string,
    duration: number
}

interface FutureClass extends Omit<FitnessClass, 'startsAt'> {
    willStartsAt: string
}

interface Client {
    name: string
}

interface RealClient extends Client {
    age: number | string,
    gender: string,
}

interface  CurrClient extends RealClient {
    timeLeft: string
}

interface ExClient extends RealClient {
    makeCallFor: Date
}

interface FutureClient extends Client {
    makeCallFor: Date
}

// type FutureClient = Pick<ExClient, 'name' | 'makeCallFor'>

interface FitnessClub {
    clubName: string,
    location: string,
    classes: FitnessClass[],
    futureClasses: FutureClass[],
    currClients: Client[],
    exClients: ExClient[],
    futureClients: FutureClient[]
}

const fitnessClubCenter: FitnessClub = {
    clubName: 'Fintess club Center',
    location: 'central ave. 45, 5th floor',
    classes: [
        {
            name: 'yoga',
            startsAt: '8:00 AM',
            duration: 60,
        },
        {
            name: 'trx',
            startsAt: '11:00 AM',
            duration: 45
        },
        {
            name: 'swimming',
            startsAt: '3:00 AM',
            duration: 70
        }
    ],
    futureClasses: [
        {
            name: 'boxing',
            willStartsAt: '6:00 AM',
            duration: 40
        },
        {
            name: 'breath training',
            willStartsAt: '8:00 AM',
            duration: 30
        }
    ],
    currClients: [
        {
            name: 'John Smith',
            age: '-',
            gender: 'male',
            timeLeft: '1 month'
        },
        {
            name: 'ALise Smith',
            age: 35,
            gender: 'female',
            timeLeft: '3 month'
        },
        {
            name: 'Ann Sonne',
            age: 24,
            gender: 'female',
            timeLeft: '5 month'
        }
    ],
    exClients: [
        {
            name: 'Tom Smooth',
            age: 50,
            gender: 'male',
            makeCallFor: new Date('2023-08-12')
        }
    ],
    futureClients: [
        {
            name: 'Maria',
            makeCallFor: new Date('2023-07-12')
        }
    ]
    

}