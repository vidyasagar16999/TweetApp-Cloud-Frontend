import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/Services/Login/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public forgotPasswordForm: FormGroup
  constructor(private _loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)])
    }
    )
  }

  forgotPassword() {
    const forgotPass =
    {
      userName: this.forgotPasswordForm.value.username,
      newPassword: this.forgotPasswordForm.value.password,
      confirmPassword: this.forgotPasswordForm.value.confirmPassword
    }

    this._loginService.forgotPassword(forgotPass).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('login');
    }, err => {
      console.log(err);
    }
    );
  }

}
