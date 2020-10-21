import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../../list-todos/list-todos.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllToDoItems(username: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteToDoItem(username: string, id: number): Observable<object> {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }
}
