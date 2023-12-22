import { companyDeposit, personDeposit } from "./controllers/deposit";
import { companyLoan } from "./controllers/getLoan";
import { companyWithdraw, personWithdraw } from "./controllers/withdraw";

console.log("To Company:", companyDeposit);
console.log("To Person:", personDeposit);
console.log("To Company:", companyWithdraw);
console.log("To Person:", personWithdraw);
console.log("To Company:", companyLoan);