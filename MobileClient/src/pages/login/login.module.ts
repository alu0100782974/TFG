import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { FormsModule } from '@angular/forms';
//import { UserDataProvider } from '../../providers/user-data/user-data';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    FormsModule],
})

export class LoginPageModule {

}
