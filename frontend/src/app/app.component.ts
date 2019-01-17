import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { tokenKey } from '@angular/core/src/view';
import { UserData } from './model/userdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData: UserData = new UserData();

  token : string;
  error : string;

  constructor(private apiService : ApiService) {
  }

  getToken() {
    this.apiService.getToken(this.userData).subscribe(res => {
      console.log(res.access_token);
      this.token = res.access_token;
      this.error = '';
      /*this.getUsername(res) */},
      err => {
        this.token ='';
        this.error = "Invalid credentials";
      });
  }

  getUsername(tokenInfo) {
    this.apiService.getUsernameOfToken(tokenInfo).subscribe(response => console.log(response));
  }
}
