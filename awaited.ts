type FromPromise = Awaited<Promise<number>>;//когда это сработает, то вернет number

interface Smbd {
    name: string
}

async function fetchSmbd(): Promise<Smbd[]> {
    const users: Smbd[] = [
        {
            name: 'Alex'
        }
    ]
    return users;
}

const users = fetchSmbd();

type FetchData = Awaited<ReturnType<typeof fetchSmbd>>

type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;
type FetchDataRT = UnwrappedPromise<ReturnType<typeof fetchSmbd>>

