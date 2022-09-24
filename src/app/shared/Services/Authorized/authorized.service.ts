import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

const httpOptions1 = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthorizedService {
  token: String;
  url = "http://tweetappjavabackend-env.eba-d4w9anda.ap-south-1.elasticbeanstalk.com/api/v1.0/tweets/";
  loginId: any;
  private loggedIn = false;

  constructor(private http: HttpClient) { }

  public getUserLoginId() {
    if (localStorage.getItem("loginId")) {
      this.loginId = localStorage.getItem("loginId") == null ? "" : localStorage.getItem("loginId");
    }
    return this.loginId;
  }

  public getAllUsers() {
    console.log('All Users....');
    return this.http.get(this.url + "user/all");
  }

  public getAllTweets() {
    console.log('All Tweets....');
    return this.http.get(this.url + "all");
  }

  public getTweetLikeById(tweetId: string, userName: string) {
    console.log('Tweet Like....');
    console.log(tweetId);
    return this.http.get(this.url + userName + "/like/" + tweetId);
  }

  public getTweetById(tweetId: string) {
    console.log('Tweet details....');
    console.log(tweetId);
    return this.http.get(this.url + "tweetDetail/" + tweetId);
  }

  public getTweetsByUserName(username: string) {
    console.log('tweets by username....');
    return this.http.get(this.url + username);
  }

  public getUserByUserName(username: string) {
    console.log('User Search by username....');
    return this.http.get(this.url + "user/search/" + username);
  }

  public changePassword(user: any) {
    console.log('forgot password....');
    console.log(user);
    return this.http.post(this.url + user.userName + "/forgot", user);
  }

  public postTweet(tweet: any) {
    console.log('Post tweet....');
    console.log(tweet);
    return this.http
      .post(this.url + tweet.loginId + "/add", tweet)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public addComment(userComment: any, loginId: any) {
    console.log('reply to tweet....');
    console.log(userComment);
    return this.http
      .put(this.url + loginId + "/reply/" + userComment.tweetId, userComment);
  }

  public deleteTweetById(tweetId: any, userName: any) {
    console.log(tweetId);
    return this.http.delete(this.url + userName + "/delete/" + tweetId);
  }

}
