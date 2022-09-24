import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizedService } from 'src/app/shared/Services/Authorized/authorized.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})

export class TweetComponent implements OnInit {

  Tweet: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private authorizedService: AuthorizedService) { }

  ngOnInit(): void {
    this.Tweet = this.fb.group({
      tweetTag: ["", [Validators.maxLength(50)]],
      tweetDescription: ["", [Validators.required, Validators.maxLength(144)]]
    });
  }

  OnSubmit() {
    this.submitted = true;
    if (this.Tweet.invalid) {
      return;
    }
    const loginId = localStorage.getItem("loginId") == null ? "" : localStorage.getItem("loginId");

    const tweet =
    {
      tweetId: Math.floor(Math.random() * 100) + 1,
      tweetTag: this.Tweet.value.tweetTag,
      tweet: this.Tweet.value.tweetDescription,
      userName: loginId
    }

    this.authorizedService.postTweet(tweet)
      .subscribe(data => {
        if (data.userName != undefined) {
          console.log(data)
          this.router.navigate(['user-dashboard/my-tweets']);
        }
        else {
          console.log("error");
        }
      });
  }
}
