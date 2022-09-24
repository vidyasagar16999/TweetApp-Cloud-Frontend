import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/shared/Services/Register/register.service';
import { ConfirmedValidator } from '../../shared/PasswordValidation/confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  UserRegister: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private registerService: RegisterService) {
  }

  ngOnInit(): void {
    this.UserRegister = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      contactNumber: ['', [Validators.required, Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    },
      {
        validator: ConfirmedValidator("password", "confirmPassword")
      }
    );
  }

  onSubmit() {

    this.submitted = true;
    if (this.UserRegister.invalid) {
      return;
    }

    var userInfo =
    {
      firstName: this.UserRegister.value.firstName,
      lastName: this.UserRegister.value.lastName,
      userName: this.UserRegister.value.username,
      email: this.UserRegister.value.email,
      contactNumber: this.UserRegister.value.contactNumber,
      password: this.UserRegister.value.password,
      confirmPassword: this.UserRegister.value.confirmPassword
    }

    this.registerService.register(userInfo).subscribe(data => {
      if (data.userName !== undefined) {
        console.log("User registered successfully");
        this.router.navigateByUrl('login');
      }
      else if (data == "User Already exists") {
        console.log("User already exists");
      }
      else {
        console.log("Error");
      }
    });
  }

}
