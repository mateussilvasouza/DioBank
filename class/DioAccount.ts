export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit(valueDeposit: number): void {
    if (this.validateStatus()) {
      this.balance += valueDeposit;
      console.log("Voce depositou");
    }
  }

  withdraw = (valueWithdraw: number): void => {
    if (this.validateStatus() && this.balance >= valueWithdraw) {
      this.balance -= valueWithdraw;
      console.log("Voce sacou");
    }
  };

  getBalance = (): number => {
    console.log(this.balance);
    return this.balance;
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
