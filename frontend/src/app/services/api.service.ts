import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenData } from '../model/tokendata';
import { UserData } from '../model/userdata';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

BASE_URL = 'http://localhost:8080/';

  headers = new HttpHeaders()
  .set("Authorization", "Basic" + btoa('client:secret'));

  constructor(private http : HttpClient) {
   }


   getToken(userData : UserData) {
    const getTokenParameters: HttpParams = new HttpParams()
    .append('grant_type','password')
    .append('username', userData.username)
    .append('password', userData.password)

    const getTokenHeaders: HttpHeaders = new HttpHeaders()
    .append('Authorization', 'Basic '+ btoa('client:secret'))

     return this.http
     .post<TokenData>(this.BASE_URL + "oauth/token"
     , {withCredentials: true}
     , {headers: getTokenHeaders , params: getTokenParameters});
   }

   getUsernameOfToken(tokenInfo) {
    return this.http.post(this.BASE_URL + "username"
    ,{withCredentials: true}
    , {headers: new HttpHeaders({'Authorization': 'Bearer ' + tokenInfo['access_token']})});
   }
}
