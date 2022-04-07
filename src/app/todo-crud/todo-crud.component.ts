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
    this.initList();
  }

  initList() {
    this.list = [
      {
        name: "Eat breakfast",
        done: false,
      },
      {
        name: "Go to work",
        done: false,
      },
      {
        name: "Finish the work",
        done: false,
      },
    ];
    this.updateListCount();
  }

  submit() {
    this.list.push({
      name: this.input,
      done: false,
    })
    this.input = "";
    this.updateListCount();
  }

  toggleActive(index: number) {
    this.list[index].done = !this.list[index].done;
  }

  removeItem(index: number) {
    this.list = this.list.filter((item, i) => {
      return i !== index;
    })
    this.updateListCount();
  }

  updateListCount() {
    this.listCountEvent.emit(this.list.length);
  }
}