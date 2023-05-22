const num = 5
const strNum = num.toString()

interface Department1 {
    name: string,
    budget: number
}

const department1: Department1 = {
    name: 'dev',
    budget: 50000
}

interface Project {
    name: string,
    projectBudget: number
}

function transformDepartment(department1: Department1, amount: number): Project {
    return {
        name: department1.name,
        projectBudget: amount
    }
}

const mainProject: Project = transformDepartment(department1, 4000)