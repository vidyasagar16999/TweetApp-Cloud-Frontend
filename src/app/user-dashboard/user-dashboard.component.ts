import { Component, OnInit } from '@angular/core';
import { AuthorizedService } from '../shared/Services/Authorized/authorized.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  userName: string;
  lastTweet: any;
  UserName: String = "Welcome, ";

  constructor(private authorizedService: AuthorizedService) { }

  ngOnInit(): void {
    this.getWelcomeUserName();
  }

  getWelcomeUserName() {
    const userName = localStorage.getItem("loginId") == null ? "" : localStorage.getItem("loginId");
    console.log(userName);
    if (userName != null) {
      this.UserName += userName.toLocaleUpperCase();
    }
  }

}
