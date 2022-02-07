import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-for-beginers';

  counter: number = 0;
  updatedAt?: number;

  get cannotDecrease(): boolean {
    this.updatedAt = Date.now();
    return this.counter <= 0;
  }

  increase(): void {
    this.counter++;
  }
  decrease(): void {
    this.counter--;
  }
  clear(): void {
    this.counter=0;
  }
}
