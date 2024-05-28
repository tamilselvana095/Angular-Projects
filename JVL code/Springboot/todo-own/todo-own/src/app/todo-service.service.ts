import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseUrl}/todo`, todo);
  }
}
