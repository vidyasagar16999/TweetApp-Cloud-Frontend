import { Component, OnInit } from '@angular/core';
import { AuthorizedService } from 'src/app/shared/Services/Authorized/authorized.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserComponent } from '../../user-search/user/user.component';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  addForm: FormGroup;
  myTweets: any = [];
  displayNoData: string;
  submitted = false;

  user: any;
  userData: any;
  fullName: string;
  userName: string;
  constructor(private authorizedService: AuthorizedService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      comments: ['', Validators.required],
    });

    const username = localStorage.getItem("loginId") == null ? "" : localStorage.getItem("loginId");

    if (username != null) {
      this.getTweetsByUserName(username);
    }
  }

  private getTweetsByUserName(username: string) {
    this.authorizedService.getTweetsByUserName(username).subscribe(data => {

      this.myTweets = data;
      if (this.myTweets.length > 0) {
        this.displayNoData = "true";
        console.log(username);
        this.authorizedService.getUserByUserName(username).subscribe(data => {
          this.user = data;
          this.userName = this.user.userName
        });
      }
      else {
        this.displayNoData = "false";
      }

    });
  }

  deleteTweetById(tweetId: any, userName: any) {
    this.authorizedService.deleteTweetById(tweetId, userName).subscribe(data => {
      console.log(data);
      this.userData = data;
      if (this.userData.status == "successfully deleted...!") {
        this.ngOnInit();
      }
    });
  }

  LikeTweetByID(tweetId: any, userName: any) {
    this.authorizedService.getTweetLikeById(tweetId, userName).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
