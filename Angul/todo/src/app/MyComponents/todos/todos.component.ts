import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:ToDo[];
  constructor() {
    this.todos=JSON.parse(localStorage.getItem("todos")||"");
   }

  ngOnInit(): void {
  }
  todoDelete(todo:ToDo){
    let i=this.todos.indexOf(todo);
    this.todos.splice(i,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:ToDo){
      this.todos.push(todo);
      localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
