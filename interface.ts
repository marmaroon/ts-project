// интерфейсы нужны чтобы описывать шаблон объекта, 
// в type '=' и '&', в interfaces {} и extends
// type Protocol = 'http' | 'https', type можем содержать любые примитивные значения

interface IConfig1 {
    protocol: 'http' | 'https'; 
    port: 3000 | 3001,
    log: (msg: string) => void
}

interface IRole1 {
    role: string;
}

interface IConfig1 {
    date: Date
}

interface ConfigWithRole1 extends IConfig1, IRole1 {
    test: string
}

const serverConfig1: ConfigWithRole1 = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    test: 'string',
    log: (msg: string): void => console.log(msg)
}