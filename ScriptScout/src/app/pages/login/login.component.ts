import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  message = '';

  constructor(private router: Router){}

  login(){

    if(this.email === 'admin@gmail.com' &&
       this.password === '12345'){

      this.router.navigate(['/dashboard']);

    }else{

      this.message = "Invalid Email or Password";

    }

  }

}
