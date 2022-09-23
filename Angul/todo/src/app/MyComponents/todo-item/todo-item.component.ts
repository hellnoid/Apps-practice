import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:ToDo;
  @Output() delTodo: EventEmitter<ToDo>=new EventEmitter;
  exampleCheck1: any;
  constructor() { }

  ngOnInit(): void {
    // this.onReload(this.todo);
  }
  onClick(todo:ToDo){
    console.log(todo);
    this.delTodo.emit(todo);
  }
  onCheckbox(todo:ToDo){
   let todos=JSON.parse(localStorage.getItem("todos")||"");
   
  const index = todos.findIndex((ele:ToDo) => {
  return ele.title === todo.title;
   });
 
   console.log("Index  ",index);
   console.log("before  ",todos[index]);
   todo.active=!todo.active;
   todos[index]=todo;
   localStorage.setItem("todos",JSON.stringify(todos));
   console.log("after  ",todos[index]);
  }
  // onReload(todo:ToDo){
  //    const input = document.getElementById('exampleCheck1') as HTMLInputElement | null;
  //  if(input){
  //   if(todo.active===false)
  //  input.checked=false;
  //  else{
  //   input.checked=true;
  //  }
  // }
  // }
}