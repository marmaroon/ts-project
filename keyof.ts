interface ICompany {
    name: string
    debts: number,
    departments: Department[]
    management: {
        owner: string
    }
}

interface Department {
    [key: string]: string
}

const debts = 'debts'
type CompanyDebtsType2 = ICompany[typeof debts] //если работаем с type or interfaces

type CompanyDebtsType = ICompany['debts'] // indexed access types (number)

type CompanyOwnerType = ICompany['management']['owner'] //string
type CompanyDepartTypes = ICompany['departments'][number] //Department
type Test = ICompany[keyof ICompany] 

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = 'name'

function printDebts<T, K extends keyof T, S extends keyof T>(
    company: T, 
    name: K,
    debts: S
    ) {
    console.log(`Company ${company[name]}, debts: ${company[debts]} `); // Если вам нужно вывести значение 
    //свойства name, то используйте console.log(Company ${company.name} );. 
    //Если же вы хотите вывести значение свойства, ключ которого содержится в переменной name, 
    //то используйте console.log(Company ${company[name]} );.

}
const google: ICompany = {
    name: 'HH',
    debts: 50000,
    departments: {
        sales: 'sales',
        developer: 'dev'
    },
    management: {
        owner: 'John'
    }
}

printDebts(google, 'name', 'debts')

type GoogleKeys = keyof typeof google;
const keys2: GoogleKeys = 'debts'