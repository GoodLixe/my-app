import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';

export const routes: Routes = [
  {
    path: 'book',
    component: BookComponent
  },
  
  {
    path: 'page',
    loadChildren: () =>
      import('./page/page.module').then(m => m.PageModule)
  }
];