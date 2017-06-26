import { Injectable } from '@angular/core';

const FAKETODOS = [
    'make bed',
    'eat',
    'drink'
]

@Injectable()
export class TodoService {
    getTodos(){
        return FAKETODOS;
    }
    addTodo(todo){
        FAKETODOS.push(todo);
    }
}
