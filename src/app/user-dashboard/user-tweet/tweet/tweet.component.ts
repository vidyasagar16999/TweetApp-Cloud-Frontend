import { Component, OnInit } from '@angular/core';
import { AuthorizedService } from 'src/app/shared/Services/Authorized/authorized.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  tweet: any;
  comments: any = [];
  liked: boolean;
  user: any
  tweetId: string;
  addCommentForm: FormGroup;
  addLikeForm: FormGroup;
  submitted = false;
  displayNoCommentsData: string;

  constructor(private authorizedService: AuthorizedService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addCommentForm = this.fb.group({
      comments: ['', Validators.required],
    });
    this.addLikeForm = this.fb.group({
      like: [''],
    });
    this.route.params
      .subscribe(
        (params: Params) => {
          this.tweetId = params['tweetId'];
          this.getTweetById(this.tweetId);
        }
      );
    this.liked = false;

  }

  private getTweetById(tweetId: string) {
    const userName = localStorage.getItem("loginId")!;
    this.authorizedService.getTweetById(tweetId).subscribe(data => {
      this.tweet = data;
      console.log(this.tweet);
      console.log(this.tweet.tweetReply.length);
      if (this.tweet.tweetReply.length > 0) {
        this.displayNoCommentsData = "true";
      }
      else {
        this.displayNoCommentsData = "false"
      }

    });
  }

  addComments(tweetId: string) {
    const loginId = localStorage.getItem("loginId") == null ? "" : localStorage.getItem("loginId");

    this.submitted = true;
    console.log(this.addCommentForm.invalid);
    if (this.addCommentForm.invalid) {
      return;
    }

    const userComment =
    {
      tweetId: tweetId,
      tweetReply: this.addCommentForm.value.comments
    }

    this.authorizedService.addComment(userComment, loginId).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });

  }

}
