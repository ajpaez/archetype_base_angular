import { Component, OnInit } from '@angular/core';
import {Login} from "../../dto/LoginDto";
import {LoginService} from "../../services/login.service";
import {Logger} from "angular2-logger/core";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  logginStatus: boolean = null;

  constructor(private _logger: Logger, private loginService: LoginService) {

  }

  ngOnInit() {
  }

  login(username: string, password: string): void {
    this._logger.info('Login userName: ' + username + ' with pass: ' + password);

    let loginDto = new Login();
    loginDto.userName = username;
    loginDto.pass = password;

    this.loginService.login(loginDto).then(restul => this.logginStatus = restul);
  }

}
