enum TransferStatus {
    Pending = 'pending',
    Rejected = 'rejected',
    Completed = 'completed'
}

enum ErrorMessages {
    NotFound = 'NotFound: 404',
    NotEnoughSpace = 'Not enough space: 507',
    Forbidden = 'Forbidden: 403'
}

interface ITransfer {
    path: string;
    data: string[];
    date?: Date;
    start: (p: string, d: string[]) => string;
    stop: (reason: string) => string;
}

interface TransferError {
    message: ErrorMessages;
}

// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer implements ITransfer, TransferError{
    message!: ErrorMessages;
    path!: string;
    data!: string[];
    date?: Date | undefined;
    transferStatus: TransferStatus

    constructor(status: TransferStatus) {
        this.transferStatus = status;
    }

    start(p: string, d: string[]) {
        return 'Transfer started'
    };

    checkTransferStatus = (): string => {
        return this.transferStatus
    }
    

    stop = (reason: string) => {
        return `Transfer stopped because ${reason}, Date: ${new Date().toDateString}`
    }

    makeError = ():string => {
        return `Status: ${TransferStatus.Rejected}, error message: ${ErrorMessages.Forbidden}`
    }

}

const transfer = new SingleFileTransfer(TransferStatus.Pending);
console.log(transfer.checkTransferStatus());
console.log(transfer.stop('Test'));
console.log(transfer.makeError());
