import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todoList: Todo[] = [new Todo(1, 'hello', false), new Todo(2, "temp", false)]

  public addTodo(name: string) {
    var newTodo = new Todo(this.todoList.length, name, false);
    this.todoList.push(newTodo);
  }

  public removeTodo(id: number) {
    this.todoList = this.todoList.filter((x) => x.id != id)
  }

  public renameTodo(id: number, newName: string) {
    this.todoList[id].name = newName
  }

  public toggleTodo(id: number) {
    this.todoList[id].id != this.todoList[id].id
  }

  constructor() { }

  ngOnInit(): void {
  }

}
