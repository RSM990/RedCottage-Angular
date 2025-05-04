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
      price: 3.0,
      description: 'Classic homemade banana bread made with ripe bananas',
      currentlyAvailable: true,
      imageUrl: '../../../../../assets/images/bread.jpg',
      ingredients: 'Bananas, flour, sugar, eggs, butter, vanilla, baking soda',
    },
    {
      id: 2,
      name: 'Brownies',
      price: 5.0,
      description: 'Rich chocolate brownies with a fudgy center',
      currentlyAvailable: true,
      imageUrl: '../../../../../assets/images/brownies.JPEG',
      ingredients:
        'Chocolate, butter, sugar, eggs, flour, cocoa powder, vanilla',
    },
    {
      id: 3,
      name: 'Chocolate Chip Cookies',
      price: 10.0,
      description:
        'Traditional chocolate chip cookies with crispy edges and soft centers',
      currentlyAvailable: true,
      imageUrl: '../../../../../assets/images/chocolate-chip-cookies.png',
      ingredients:
        'Flour, butter, brown sugar, eggs, chocolate chips, vanilla, baking soda',
    },
    {
      id: 4,
      name: 'Cinnamon Buns',
      price: 5.0,
      description:
        'Soft, swirled buns with cinnamon filling and cream cheese frosting',
      currentlyAvailable: true,
      imageUrl: '../../../../../assets/images/cinnamon-bun.png',
      ingredients: 'Flour, milk, yeast, butter, cinnamon, sugar, cream cheese',
    },
    {
      id: 5,
      name: 'Crumb Buns',
      price: 5.0,
      description:
        'Sweet breakfast buns topped with buttery brown sugar crumbs',
      currentlyAvailable: true,
      imageUrl: '../../../../../assets/images/crumb-bun.png',
      ingredients: 'Flour, butter, brown sugar, cinnamon, eggs, milk, yeast',
    },
    {
      id: 6,
      name: 'Gluten-free Almond Cake',
      price: 4.0,
      description:
        'Moist almond cake made with ground almonds, perfect for gluten-sensitive customers',
      currentlyAvailable: true,
      imageUrl: '../../../../../assets/images/almond-cake.JPEG',
      ingredients:
        'Ground almonds, eggs, sugar, butter, vanilla, baking powder',
    },
    {
      id: 7,
      name: 'Honey Almond Squares',
      price: 6.0,
      description:
        'Sweet honey-glazed pastry squares topped with sliced almonds',
      currentlyAvailable: true,
      imageUrl: '../../../../../assets/images/honey-almond-squares.jpg',
      ingredients: 'Flour, honey, almonds, butter, eggs, sugar, vanilla',
    },
    {
      id: 8,
      name: 'Lemon Bars',
      price: 4.0,
      description:
        'Tangy lemon curd on a buttery shortbread base dusted with powdered sugar',
      currentlyAvailable: true,
      imageUrl: '../../../../../assets/images/lemon-bars.png',
      ingredients: 'Lemons, butter, flour, eggs, sugar, powdered sugar',
    },
    {
      id: 9,
      name: 'Marble Cake',
      price: 4.0,
      description:
        'Classic vanilla and chocolate swirled cake with a tender crumb',
      currentlyAvailable: true,
      imageUrl: '../../../../../assets/images/marble-cake.png',
      ingredients: 'Flour, butter, sugar, eggs, vanilla, cocoa powder, milk',
    },
    {
      id: 10,
      name: 'Red Cottage Cookies',
      price: 2.0,
      description: 'Our signature house cookies with a secret recipe',
      currentlyAvailable: true,
      imageUrl: '../../../../../assets/images/red-cottage-cookies.JPEG',
      ingredients:
        'Flour, butter, sugar, eggs, vanilla, baking powder, powdered sugar, milk',
    },
    {
      id: 11,
      name: 'Rugelach',
      price: 5.0,
      description:
        'Traditional Jewish pastry filled with nuts, raisins, and cinnamon',
      currentlyAvailable: true,
      imageUrl: '../../../../../assets/images/rugelach.png',
      ingredients: 'Flour, cream cheese, butter, cinnamon, nuts, raisins',
    },
  ];

  seasonalItems = [
    'Blueberry Almond Loaf',
    'Caramel Popcorn',
    'Cranberry Nut Bread',
    "Farmer's Cookies",
    'Gingerbread Cottage Cookies',
    'Maple Loaf',
    'Meringues',
    'Muffins (apple, blueberry, peach, pumpkin, strawberry)',
    'Zucchini Loaf',
  ];
}
