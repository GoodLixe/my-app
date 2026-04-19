import { Component } from '@angular/core';
import _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html'
})
export class DemoComponent {

  numbers = [1, 2, 3, 4, 5];
  shuffled: number[] = [];

  constructor(private toastr: ToastrService) {}

  shuffleArray() {
    this.shuffled = _.shuffle(this.numbers); // lodash
    this.toastr.success('Массив перемешан'); // toastr
  }
}