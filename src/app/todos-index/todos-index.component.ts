import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos-index',
  templateUrl: './todos-index.component.html',
  styleUrls: ['./todos-index.component.css']
})
export class TodosIndexComponent implements OnInit {

  constructor(
      private todoService: TodoService
  ) { }

  todos;

  ngOnInit() {
      this.todos = this.todoService.getTodos();
  }

}
