import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  error: Boolean = false;
  tasks: String[] = [];
  task: String = "";

  addTask() {
    this.tasks.push(this.task);
  }
}
