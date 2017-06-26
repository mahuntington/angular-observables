import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todos-create',
  templateUrl: './todos-create.component.html',
  styleUrls: ['./todos-create.component.css']
})
export class TodosCreateComponent implements OnInit {

  constructor(
      private todoService: TodoService
  ) { }

  create(todo){
      this.todoService.addTodo(todo);
  }

  ngOnInit() {
  }

}
