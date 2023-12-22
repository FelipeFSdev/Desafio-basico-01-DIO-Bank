import { CompanyAccount } from "../class/companyAccount";
import { PersonAccount } from "../class/personAccount";

const companyAccount = new CompanyAccount("Cubos", 23, 12345678000190);
const personAccount = new PersonAccount("Felipe", 21);

export const companyDeposit = companyAccount.deposit(5000);
export const personDeposit = personAccount.deposit(5000);