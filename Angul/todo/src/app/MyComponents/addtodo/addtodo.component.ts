import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<ToDo>=new EventEmitter();

  title:string;
  desc:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
     let todo={
      title: this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }

}
