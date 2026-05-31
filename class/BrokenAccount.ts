import { DioAccount } from "./DioAccount";

export class BrokenAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit(valueDeposit: number): void {
    if (this.validateStatus()) {
      super.deposit(valueDeposit + 10);
      console.log("Voce depositou");
    }
  }
}
