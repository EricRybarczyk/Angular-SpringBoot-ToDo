import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../../list-todos/list-todos.component';
import {BasicAuthenticationService} from '../auth/basic-authentication.service';
import {API_URL} from '../../app.constants';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  username: string;

  constructor(private http: HttpClient, private authenticationService: BasicAuthenticationService) {
    this.username = authenticationService.getAuthenticatedUser();
  }

  retrieveAllToDoItems(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${API_URL}/users/${this.username}/todos`);
  }

  retrieveToDoItem(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${API_URL}/users/${this.username}/todos/${id}`);
  }

  deleteToDoItem(id: number): Observable<object> {
    return this.http.delete(`${API_URL}/users/${this.username}/todos/${id}`);
  }

  updateToDoItem(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${API_URL}/users/${this.username}/todos/${id}`, todo);
  }

  createToDoItem(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${API_URL}/users/${this.username}/todos/`, todo);
  }
}
