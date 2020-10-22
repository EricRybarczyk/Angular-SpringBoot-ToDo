import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) { }
  public toString(): string {
    return '[Todo {id(' + typeof this.id + ')=' + this.id + '},{description (' + typeof this.description + ')=' + this.description + '}]';
  }
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

  newToDoItem(): void {
    this.router.navigate(['todos', -1]);
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
