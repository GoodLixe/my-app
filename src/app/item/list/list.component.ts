import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `<h3>List works</h3>`
})
export class ListComponent {
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log('Query:', params);
    });
  }
}