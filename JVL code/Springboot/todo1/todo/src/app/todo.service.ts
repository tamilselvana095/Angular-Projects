import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './create/create.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:8080/api/todo', Todo);
  }


}
