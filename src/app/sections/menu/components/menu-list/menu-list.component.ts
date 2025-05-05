import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class MenuListComponent implements OnChanges {
  @Input() title: string = '';
  @Input() items: MenuItem[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items'] && this.items) {
      this.items.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
  }
}
