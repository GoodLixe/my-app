import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // 🔥 ВОТ ЭТО ВАЖНО
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Desk Page');

    this.meta.addTag({
      property: 'og:desc',
      content: 'root_desc'
    });
  }
}