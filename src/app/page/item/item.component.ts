import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatTabsModule], // 👈 ОБЯЗАТЕЛЬНО
  templateUrl: './item.component.html'
})
export class ItemComponent {}