import { Component, OnInit } from '@angular/core';
import { AuthorizedService } from 'src/app/shared/Services/Authorized/authorized.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  allTweets : any = [];
  displayNoData : string;

  constructor(private authorizedService : AuthorizedService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.getAllTweets();
    }

  getAllTweets()
  {
      this.authorizedService.getAllTweets().subscribe(data =>
      {
        this.allTweets = data;
        console.log(this.allTweets);
        if( this.allTweets.length  > 0)
        {
          this.displayNoData = "true";
        }
        else{
          this.displayNoData = "false";
        }
      });
  }

  LikeTweetByID(tweetId:any){
    const userName = localStorage.getItem("loginId");
    this.authorizedService.getTweetLikeById(tweetId,userName).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }
  
}
