import { NodeTypes } from "@vue/compiler-core";
import { isRegExp } from "@vue/shared";

interface Queue<T> {
    enqueue(item: T): void; //поставить в очередь
    dequeue(): T; // исключить из очереди
    peek(): T | null; // посмотреть первый элемент
    isEmpty(): boolean; //проверка на "пустоту" сущности
    lenght(): number //проверка на длину
}

class ArrayQueue<T> implements Queue<T> {
    private queue: T[] = []

    enqueue(item: T): void {
        this.queue.push(item)
    }
    dequeue(): T {
        if (this.isEmpty()) throw new Error()
        return this.queue.shift()!;
    }
    peek(): T | null {
        return this.queue[0]
    }
    isEmpty(): boolean {
       return this.queue.length === 0
    }
    lenght(): number {
        return this.queue.length
    }

}

class Stack<T> {
    private stack: T[] = []
    private limit: number

    constructor(limit: number = Number.MAX_VALUE) {
        this.limit = limit
    }

push(value: T) {
    if(this.stack.length > this.limit) {
        throw new Error('Stack overflow')
    }
    this.stack.push(value)
}

isEmpty(): boolean {
    return this.stack.length === 0
}

pop(): T {
    if(this.isEmpty()) {
        throw new Error('Stack overflow')
    }
    return this.stack.pop()!
}

length(): number {
    return this.stack.length
}

top() {
    if(this.isEmpty()) {
        return null
    }
    return this.stack[this.stack.length - 1] //доступ к последнему добавленному элементу
}

}

const arrTest1 = new ArrayQueue<number>()
arrTest1.enqueue(5)
arrTest1.enqueue(10)
console.log(arrTest1.peek);
console.log(arrTest1.dequeue);
console.log(arrTest1.lenght);

const arrTest2 = new ArrayQueue<string>()
arrTest2.enqueue('5')
arrTest2.enqueue('10')
console.log(arrTest2.peek);
console.log(arrTest2.dequeue);
console.log(arrTest2.lenght);

const stackTest1 = new Stack<number>(10)
stackTest1.push(20)
stackTest1.push(50)
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());

const stackTest2 = new Stack<string>(10)
stackTest2.push('20')
stackTest2.push('50')
console.log(stackTest2.top());
console.log(stackTest2.pop());
console.log(stackTest2.length());


