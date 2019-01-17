import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList = [];

  BASE_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
   }


  loadData() {
    const token = sessionStorage.getItem('jsessionid');

    const tokenJSON = JSON.parse(token);

    if(token != null || tokenJSON.expires_in < new Date().getTime()) {
      const getTaskHeaders: HttpHeaders = new HttpHeaders()
      .append('Authorization','Bearer' + tokenJSON.access_token)

      return this.http
      .post(this.BASE_URL + "getTasks"
      , {withCredentials: true}
      , {headers: getTaskHeaders}).subscribe(res => {
        for(let i = 0;  ; i++) {
          if(res[i] == null) {
            break;
          }
          this.todoList.unshift(res[i].description)
        }
      } );
    }



  }

  addItem(task: string, token : string) {
    this.todoList.unshift(task);

    const insertTaskParams: HttpParams = new HttpParams()
    .append('task',task)

    const insertTaskHeaders: HttpHeaders = new HttpHeaders()
    .append('Authorization','Bearer' + token)

     return this.http
     .post(this.BASE_URL + "insertTask"
     , {withCredentials: true}
     , {headers: insertTaskHeaders 
      , params: insertTaskParams});

  }
}
