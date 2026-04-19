import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  standalone: true,
  template: `
    <h2>Open Graph Page</h2>
  `
})
export class InlineComponent {

  constructor(private meta: Meta, private title: Title) {

    // Title
    this.title.setTitle('Open Graph Page');

    // OG теги
    this.meta.addTags([
      { property: 'og:title', content: 'The Rock' },
      { property: 'og:type', content: 'video.movie' },
      { property: 'og:url', content: '//www.imdb.com/title/tt0117500/' }
    ]);
  }
}