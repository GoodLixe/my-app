import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { PlusFivePipe } from './plus-five.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent, PlusFivePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message = 'hello';

  users = [
    { name: 'Ильнур', age: 20 },
    { name: 'Алекс', age: 22 },
    { name: 'Мария', age: 19 }
  ];

  today = new Date();
  number = 10;
}