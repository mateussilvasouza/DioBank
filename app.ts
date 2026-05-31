import { BrokenAccount } from './class/BrokenAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

// --- PeopleAccount ---
console.log('=== PeopleAccount ===')
const peopleAccount = new PeopleAccount(12345678900, 'João Silva', 1001)
console.log('Nome:', peopleAccount.getName())
peopleAccount.deposit(500)
peopleAccount.getBalance()        // 500
peopleAccount.withdraw(200)
peopleAccount.getBalance()        // 300
peopleAccount.withdraw(1000)      // saldo insuficiente, não saca
peopleAccount.getBalance()        // 300

// --- CompanyAccount ---
console.log('\n=== CompanyAccount ===')
const companyAccount = new CompanyAccount('DIO', 2001)
console.log('Nome:', companyAccount.getName())
companyAccount.deposit(1000)
companyAccount.getBalance()       // 1000
companyAccount.getLoan(5000)
companyAccount.getBalance()       // 6000
companyAccount.withdraw(2000)
companyAccount.getBalance()       // 4000

// --- BrokenAccount ---
console.log('\n=== BrokenAccount ===')
const brokenAccount = new BrokenAccount('Conta Bônus', 3001)
console.log('Nome:', brokenAccount.getName())
brokenAccount.deposit(100)        // deposita 110 (100 + 10 de bônus)
brokenAccount.getBalance()        // 110
brokenAccount.deposit(50)         // deposita 60 (50 + 10 de bônus)
brokenAccount.getBalance()        // 170
brokenAccount.withdraw(70)
brokenAccount.getBalance()        // 100
