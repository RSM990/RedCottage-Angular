import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuListComponent } from '../../components/menu-list/menu-list.component';
import { MenuItem } from '../../../../core/models/menuItem';
import { ContentPageComponent } from '../../../../shared/components/content-page/content-page.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, MenuListComponent, ContentPageComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  alwaysInOven: MenuItem[] = [
    {
      id: 1,
      name: 'Banana Bread',
      seasonal: false,
      imageUrl: '../../../../../assets/images/cottage.png',
    },
    {
      id: 2,
      name: 'Brownies',
      seasonal: false,
      imageUrl: '../../../../../assets/images/brownies.JPEG',
    },
    {
      id: 3,
      name: 'Chocolate Chip Cookies',
      seasonal: false,
      imageUrl: '../../../../../assets/images/chocolate-chip-cookies.png',
    },
    {
      id: 4,
      name: 'Cinnamon Buns',
      seasonal: false,
      imageUrl: '../../../../../assets/images/cinnamon-bun.png',
    },
    {
      id: 5,
      name: 'Crumb Buns',
      seasonal: false,
      imageUrl: '../../../../../assets/images/crumb-bun.JPEG',
    },
    {
      id: 6,
      name: 'Gluten-free Almond Cake',
      seasonal: false,
      imageUrl: '../../../../../assets/images/almond-cake.JPEG',
    },
    {
      id: 7,
      name: 'Honey Almond Squares',
      seasonal: false,
      imageUrl: '../../../../../assets/images/honey-almond-squares.jpg',
    },
    {
      id: 8,
      name: 'Lemon Bars',
      seasonal: false,
      imageUrl: '../../../../../assets/images/lemon-bars.png',
    },
    {
      id: 9,
      name: 'Marble Cake',
      seasonal: false,
      imageUrl: '../../../../../assets/images/marble-cake.png',
    },
    {
      id: 10,
      name: 'Red Cottage Cookies',
      seasonal: false,
      imageUrl: '../../../../../assets/images/red-cottage-cookies.JPEG',
    },
    {
      id: 11,
      name: 'Rugelach',
      seasonal: false,
      imageUrl: '../../../../../assets/images/rugelach.png',
    },
    {
      id: 12,
      name: 'Blueberry Almond Loaf',
      seasonal: true,
      imageUrl: '../../../../../assets/images/blueberry-almond.JPEG',
    },
    {
      id: 13,
      name: 'Caramel Popcorn',
      seasonal: true,
      imageUrl: '../../../../../assets/images/popcorn.jpg',
    },
    {
      id: 14,
      name: 'Cranberry Nut Bread',
      seasonal: true,
      imageUrl: '../../../../../assets/images/cottage.png',
    },
    {
      id: 15,
      name: "Farmer's Cookies",
      seasonal: true,
      imageUrl: '../../../../../assets/images/cottage.png',
    },
    {
      id: 16,
      name: 'Gingerbread Cottage Cookies',
      seasonal: true,
      imageUrl: '../../../../../assets/images/gingerbread.jpg',
    },
    {
      id: 17,
      name: 'Maple Loaf',
      seasonal: true,
      imageUrl: '../../../../../assets/images/cottage.png',
    },
    {
      id: 18,
      name: 'Meringues',
      seasonal: true,
      imageUrl: '../../../../../assets/images/meringues.JPEG',
    },
    {
      id: 19,
      name: 'Muffins',
      seasonal: true,
      imageUrl: '../../../../../assets/images/muffins.JPEG',
    },
    {
      id: 20,
      name: 'Zucchini Loaf',
      seasonal: true,
      imageUrl: '../../../../../assets/images/bread.jpg',
    },
  ];
}
