import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../../../core/models/menuItem';
import { MenuListItemComponent } from '../menu-list-item/menu-list-item.component';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule, MenuListItemComponent],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
})
export class MenuListComponent {
  @Input() title: string = '';
  @Input() items: MenuItem[] = [];
}
