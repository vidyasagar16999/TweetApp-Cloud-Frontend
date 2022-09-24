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
export class RegisterService {
  token : String;
  url = "http://tweetappjavabackend-env.eba-d4w9anda.ap-south-1.elasticbeanstalk.com/api/v1.0/tweets/";

  constructor(private http: HttpClient) {
  }

  public register(userInfo : any) {
    console.log(userInfo);
    return this.http
    .post( this.url + "register", userInfo )
    .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  
}
