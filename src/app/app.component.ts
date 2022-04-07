import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'First Project';
  listCount:number = 0;

  updateListCount(value: number): void {
    this.listCount = value;
  }
}
