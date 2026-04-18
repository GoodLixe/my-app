import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html'
})
export class DetailsComponent {

  constructor(private route: ActivatedRoute) {
    this.route.parent?.params.subscribe(params => {
      console.log('ID:', params['id']);
    });
  }

}