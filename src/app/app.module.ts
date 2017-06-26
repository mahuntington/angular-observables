import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosIndexComponent } from './todos-index/todos-index.component';
import { TodosCreateComponent } from './todos-create/todos-create.component';

import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service'

@NgModule({
  declarations: [
    AppComponent,
    TodosIndexComponent,
    TodosCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
