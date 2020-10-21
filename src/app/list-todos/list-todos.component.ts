import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [];
  responseMessage: string;

  constructor(private toDoService: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.getToDoList();
  }

  private getToDoList(): void {
    this.toDoService.retrieveAllToDoItems('demouser').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  updateToDo(id: number): void {
    this.router.navigate(['todos', id]);
}

  deleteToDo(id: number): void {
    this.toDoService.deleteToDoItem('demouser', id).subscribe(
      response => {
        this.responseMessage = `Delete of ToDo ${id} successful`;
        this.getToDoList();
      }
    );
  }

}
