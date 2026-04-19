import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { InlineComponent } from './inline/inline.component';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
  {
    path: 'book',
    component: BookComponent
  },
  
  {
    path: 'page',
    loadChildren: () =>
      import('./page/page.module').then(m => m.PageModule)
  },
  {
    path: 'open-graph',
    component: InlineComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  }
];