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
export class LoginService {

  token: String;
  url = "http://tweetappjavabackend-env.eba-d4w9anda.ap-south-1.elasticbeanstalk.com/api/v1.0/tweets/";

  private loggedIn = false;
  constructor(private http: HttpClient) { }

  public forgotPassword(forgotPass: any) {
    console.log(forgotPass);
    return this.http.post(this.url + forgotPass.userName + '/forgot', forgotPass);
  }

  public login(userName: string, password: string) {
    let UserLogin =
    {
      userName: userName,
      password: password
    }
    return this.http
      .post(this.url + "login", UserLogin)
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public storeUserData(fullName: string, email: string, username: string, token: string) {
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("loginId", username);
    localStorage.setItem("token", token);
  }

  public isLoggedIn() {
    if (localStorage.getItem("loginId"))
      return (this.loggedIn = true);
    return this.loggedIn = false;
  }

  public logout() {
    localStorage.clear();
    this.loggedIn = false;
  }

}
