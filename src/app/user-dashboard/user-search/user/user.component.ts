import { Component, OnInit} from '@angular/core';
import { AuthorizedService } from 'src/app/shared/Services/Authorized/authorized.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  othersTweets : any = [];
  userName : string;
  displayNoTweetsData: string;

  constructor(private authorizedService:AuthorizedService, private route : ActivatedRoute) { }
 
  ngOnInit(): void {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.userName = params['userName'];
          this.getTweetsByUserName(this.userName);
        }
      );
  }
  
  private getTweetsByUserName(username : string)
  {
    console.log(this.userName);
    this.authorizedService.getTweetsByUserName(this.userName).subscribe(data=>
      {
          console.log(data);
          this.othersTweets = data;
          if(this.othersTweets.length===0){
            this.displayNoTweetsData = "true";
          }
          else{
            this.displayNoTweetsData = "false";
          }
          console.log(data);                                                                                                                                                                                                                                                                
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
