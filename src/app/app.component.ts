import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message = 'hello';
}