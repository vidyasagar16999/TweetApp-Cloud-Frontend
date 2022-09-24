import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/Services/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserLogin: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder, private router: Router, private loginService : LoginService) { }

  ngOnInit(): void {
    this.UserLogin = this.fb.group({
      username: [ "", [ Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  OnSubmit()
  {
      this.submitted = true;
      if (this.UserLogin.invalid) {
        console.log("invalid");
          return;
      }

      this.loginService.login(this.UserLogin.value.username, this.UserLogin.value.password)
      .subscribe(data =>
      {
          if(data.code == 400)
          {
            console.log("Username or Password is incorrect")
          }
          else{
            console.log(data);
            const fullName = data.firstName + " " + data.lastName;
            this.loginService.storeUserData(
              fullName,
              data.emailId,
              data.user.userName,
              data.jwt
            );
            this.router.navigate(['/user-dashboard']);
          }
      });
  }

}
