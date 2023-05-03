const serverNewConfig: BasicConfig = { // зачем прописывать и там, и там интерфейс?
    protocol: 'https',
    port: 3001
}

const backupConfig: BasicConfig = { // а здесь мы уже говорим что этот объект должен строго соответствовать этому интерфейсу?
    protocol: 'http',
    port: 3000
}

interface BasicConfig {
    protocol: string,
    port: number;

}

// может приходить объект только со структурой BasicConfig
const startNewServer = (config: BasicConfig): 'Server started' => { // здесь мы передаем нетипизированные объекты?
    console.log(`Server started on ${config.protocol}://server:${config.port}`);
    return 'Server started'
}

startNewServer(serverNewConfig)
startNewServer(backupConfig)
