import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../../core/models/menuItem';

@Component({
  selector: 'app-menu-list-item',
  imports: [],
  templateUrl: './menu-list-item.component.html',
  styleUrl: './menu-list-item.component.scss',
})
export class MenuListItemComponent {
  @Input() menuItem!: MenuItem;
}
