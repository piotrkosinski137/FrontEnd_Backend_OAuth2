import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private todoService : TodoService) {
    const token = sessionStorage.getItem('jsessionid');

    if(token === null || JSON.parse(token).expires_in < new Date().getTime()) {
      this.router.navigateByUrl('login');
    }
    
    this.todoService.loadData();

   }

  ngOnInit() {

  }

}
