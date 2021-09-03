 const bank = owner=>{
   balance=0;
   return amount=>{
     balance+=amount;
     return balance;
   }
  }
//  const bank = owner=>{
//    balance=0;
//    return {
//      deposit:amount=>{
//        balance+=amount;
//        return balance;
//      },
//      withdraw:amount=>{
//        balance-=amount;
//        return balance;
//      }
//    }
//  }

 const mofizErBank= bank('Mofiz uddin')
 console.log(mofizErBank(100))
//  console.log(mofizErBank.balance)
// console.log(mofizErBank.deposit(100))
// console.log(mofizErBank.deposit(100))
// console.log(mofizErBank.deposit(100))
// console.log(mofizErBank.withdraw(200))
// console.log(mofizErBank.deposit(500))
