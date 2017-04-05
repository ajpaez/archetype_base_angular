import {BrowserModule} from "@angular/platform-browser";
import {isDevMode, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


import {Logger} from "angular2-logger/core";

import {LoginComponent} from "../ui/page/login/login.component";
import {environment} from "../../environments/environment";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Logger],
  bootstrap: [LoginComponent]
})
export class AppModule {

  constructor(private logger: Logger) {
    if (isDevMode()) {
      console.info('To see debug logs enter: \'logger.level = logger.Level.DEBUG;\' in your browser console');
    }
    this.logger.level = environment.logger.level;
  }

}
