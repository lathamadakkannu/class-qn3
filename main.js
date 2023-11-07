//Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance.
//Include methods to deposit and withdraw money from the account. 
//Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

const depositAmt=parseInt(prompt("Enter the deposite amount"))

const withdrawAmt=parseInt(prompt("Enter the withdraw amount"))

class BankAccount{
    constructor(accountNumber,balance){
        this.accountNumber=accountNumber;
        this.balance=balance;

        console.log("Account Balance:",this.balance);
    }

    deposite(amount){
        this.balance=this.balance+amount
        console.log("Deposite amount :" ,depositAmt);
        console.log("Balance amount after deposite",this.balance);
    }

    withdraw(amount){
            this.balance=this.balance-amount
            console.log("Withdraw amount :" ,withdrawAmt);
            console.log("Balance amount after withdraw:",this.balance);
    }
}

let account=new BankAccount(24689,3000)

account.deposite(depositAmt)
account.withdraw(withdrawAmt)

console.log("Balance Amount",account.balance);

