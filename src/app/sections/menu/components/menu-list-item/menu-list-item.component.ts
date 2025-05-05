import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../../core/models/menuItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-list-item',
  imports: [CommonModule],
  templateUrl: './menu-list-item.component.html',
  styleUrl: './menu-list-item.component.scss',
})
export class MenuListItemComponent {
  @Input() menuItem!: MenuItem;
}
