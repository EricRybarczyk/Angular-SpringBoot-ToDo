import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(private toDoService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params.id); //  as number;
    this.todo = new Todo(this.id, '', false, new Date()); // default for create new item, and also binding for update until the async call returns
    console.log('INIT todo object: ' + this.todo);
    // tslint:disable-next-line:triple-equals // we want type conversion in this case, not strict equality
    if (this.id != -1) {
      this.toDoService.retrieveToDoItem('demouser', this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveToDoItem(): void {
    console.log('SAVE todo object: ' + this.todo);
    if (this.id === -1) {
      this.toDoService.createToDoItem('demouser', this.todo).subscribe(
        data => {
          console.log('ToDo item created');
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    }
    else {
      this.toDoService.updateToDoItem('demouser', this.id, this.todo).subscribe(
        data => {
          console.log('ToDo item ' + data.id + ' updated');
          this.router.navigate(['todos']);
        }
      );
    }
  }

}
