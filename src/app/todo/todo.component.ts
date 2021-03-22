import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo = {
    name: 'hello',
    id: 1,
    completed: false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
