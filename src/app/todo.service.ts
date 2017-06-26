import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TodoService {

    subject = new Subject();

    getTodosObservable(){
        return this.subject.asObservable();
    }

    addTodo(todo){
        this.subject.next(todo);
    }
}
