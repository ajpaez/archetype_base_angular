export class Login {
  private _userName: string;
  private _pass: string;


  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get pass(): string {
    return this._pass;
  }

  set pass(value: string) {
    this._pass = value;
  }
}
