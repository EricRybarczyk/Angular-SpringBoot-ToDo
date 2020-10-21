import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(private route: ActivatedRoute, private toDoService: TodoDataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.todo = new Todo(-1, '', false, new Date()); // default for binding until the async call returns
    this.toDoService.retrieveToDoItem('demouser', this.id).subscribe(
      data => this.todo = data
    );
  }

  saveToDoItem(): void {  }

}
