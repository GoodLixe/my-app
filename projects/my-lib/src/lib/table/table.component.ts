import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  data = [
    { id: 1, name: 'Ivan', age: 20 },
    { id: 2, name: 'Anna', age: 22 },
    { id: 3, name: 'Oleg', age: 25 }
  ];
}
