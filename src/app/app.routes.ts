import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes = [
  {
    path: 'page',
    loadChildren: () =>
      import('./page/page.module').then(m => m.PageModule)
  }
];