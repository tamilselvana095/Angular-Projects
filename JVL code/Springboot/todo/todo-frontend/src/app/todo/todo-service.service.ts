import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private apiUrl="http://localhost:8080/api/todo";

  constructor( private httpClient: HttpClient) { }

  createTask(newTask: Todo) : Observable<Todo>{
    return this.httpClient.post<Todo>(this.apiUrl,newTask);
  }
}
