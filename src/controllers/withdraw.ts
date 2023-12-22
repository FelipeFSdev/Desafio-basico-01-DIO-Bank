import { CompanyAccount } from "../class/companyAccount";
import { PersonAccount } from "../class/personAccount";

const companyAccount = new CompanyAccount("Cubos", 23, 12345678000190);
const personAccount = new PersonAccount("Felipe", 21);

companyAccount.deposit(5000);
personAccount.deposit(5000);

export const companyWithdraw = companyAccount.withDraw(1000);
export const personWithdraw = personAccount.withDraw(1000);