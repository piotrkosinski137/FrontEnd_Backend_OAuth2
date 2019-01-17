import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

item:string;

  constructor(private todoService : TodoService) { }

  ngOnInit() {
  }

  addTask() {
    this.todoService.addItem(this.item, JSON.parse(sessionStorage.getItem('jsessionid')).access_token)
    .subscribe();
    this.item = '';
  }

}
