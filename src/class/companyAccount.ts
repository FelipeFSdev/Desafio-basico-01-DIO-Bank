import { DioAccount } from "./dioAccount";

export class CompanyAccount extends DioAccount {
    private readonly cnpj: number
    constructor(name: string, accountNumber: number, cnpj: number) {
        super(name, accountNumber)
        this.cnpj = cnpj
    }
    public getLoan = (value: number): string => {
        this.balance += value
        return `The loan was made successfully. You've got: ${this.balance} from the bank.`
    }
}