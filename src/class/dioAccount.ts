export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    public balance: number = 0
    public status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    public deposit = (value: number): string => {
        if (this.status) {
            if (value > 0) {
                this.balance += value
                return `The deposit was made successfully. New balance: ${this.balance}.`
            }
            return `Was not possible make a deposit in this account.`
        }
        return `Was not possible make a deposit in this account.`
    }

    public withDraw = (value: number): string => {
        if (this.status) {
            if (value <= this.balance) {
                this.balance -= value
                return `The withdraw was made successfully. New balance: ${this.balance}`
            }
            return `Was not possible make a withdraw from this account.`
        }
        return `Was not possible make a withdraw from this account.`
    }
}