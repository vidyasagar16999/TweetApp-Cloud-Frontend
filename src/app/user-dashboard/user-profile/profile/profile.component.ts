import { Component, OnInit } from '@angular/core';
import { AuthorizedService } from 'src/app/shared/Services/Authorized/authorized.service';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmedValidator } from '../../../shared/PasswordValidation/confirm-password.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  ChangePassword: FormGroup;
  submitted = false;
  userName: string;

  constructor(private fb: FormBuilder, private router: Router, private authorizedService: AuthorizedService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = localStorage.getItem("loginId") == null ? "" : localStorage.getItem("loginId");

    if (id != null) {
      console.log(id);
      this.getUserById(id);
    }

    this.ChangePassword = this.fb.group({

      username: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    },
      {
        validator: ConfirmedValidator("newPassword", "confirmPassword")
      });
  }

  private getUserById(username: string) {
    this.authorizedService.getUserByUserName(username).subscribe(data => {
      this.user = data;
      console.log(data);
    });

  }

  changePassword() {
    this.submitted = true;
    if (this.ChangePassword.invalid) {
      console.log("invalid");
      return;
    }

    const user = {
      userName: this.ChangePassword.value.username,
      newPassword: this.ChangePassword.value.newPassword,
      confirmPassword: this.ChangePassword.value.confirmPassword
    }
    console.log(user);
    this.authorizedService.changePassword(user)
      .subscribe((data: any) => {
        console.log(data);

        if (data == "password changed successfully...!") {
          console.log("Password changed successfully");
          this.router.navigateByUrl('login');
        }
        else {
          console.log("Old password is incorrect")
        }
      });
  }

}
