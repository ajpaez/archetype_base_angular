import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Login }           from '../dto/LoginDto';

@Injectable()
export class LoginService {

  constructor() {}

  login(loginDto: Login): Promise<any> {
    if (loginDto.userName === "user" && loginDto.pass === "pass") {

    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }else{
      return new Promise((resolve, reject) => {
        resolve(false);
      });
    }
  }
}
