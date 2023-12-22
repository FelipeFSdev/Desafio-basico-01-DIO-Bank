import { CompanyAccount } from "../class/companyAccount";

const companyAccount = new CompanyAccount("Cubos", 23, 12345678000190);

export const companyLoan = companyAccount.getLoan(1000);