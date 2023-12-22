import { DioAccount } from "./dioAccount";

export class PersonAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }
    deposit = (value: number): string => {
        if (this.status) {
            if (value > 0) {
                this.balance += value + 10
                return `The deposit was made successfully. New balance: ${this.balance}.`
            }
            return `Was not possible make a deposit in this account.`
        }
        return `Was not possible make a deposit in this account.`
    }
}