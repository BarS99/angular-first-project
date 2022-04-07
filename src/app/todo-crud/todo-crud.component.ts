import { Component, OnInit, EventEmitter, Output } from '@angular/core';

interface TodoCrudItem {
  name: string,
  done: boolean,
}

@Component({
  selector: 'app-todo-crud',
  templateUrl: './todo-crud.component.html',
  styleUrls: ['./todo-crud.component.css']
})
export class TodoCrudComponent implements OnInit {

  list: TodoCrudItem[] = [];
  input: string = "";

  @Output() listCountEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
   
  }

  submit(): void {
    this.list.push({
      name: this.input,
      done: false,
    })
    this.input = "";
    this.updateListCount();
  }

  toggleActive(index: number): void {
    this.list[index].done = !this.list[index].done;
  }

  removeItem(index: number): void {
    this.list = this.list.filter((item, i) => {
      return i !== index;
    })
    this.updateListCount();
  }

  updateListCount(): void {
    this.listCountEvent.emit(this.list.length);
  }
}