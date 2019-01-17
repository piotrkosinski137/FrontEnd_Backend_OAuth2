import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { UserData } from 'src/app/model/userdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

userData = new UserData();

error = false;

  constructor(private apiService : ApiService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.userData.username.length > 0 && this.userData.password.length > 0)
    this.apiService.getToken(this.userData).subscribe(result => {

      result.expires_in = new Date().getTime() + result.expires_in * 100;

      //store token in session
      sessionStorage.setItem('jsessionid', JSON.stringify(result));

      this.router.navigateByUrl('home');
    }, error => {
      this.error = true;
    })
  }

}
