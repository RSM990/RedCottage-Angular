import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { ScrollNavigationComponent } from './layout/scroll-navigation/scroll-navigation.component';
import { WelcomeComponent } from './sections/welcome/welcome.component';
import { AboutComponent } from './sections/about/about.component';
import { MenuComponent } from './sections/menu/menu.component';
import { ScheduleComponent } from './sections/schedule/schedule.component';
import { ContactComponent } from './sections/contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    CommonModule,
    FooterComponent,
    ScrollNavigationComponent,
    WelcomeComponent,
    AboutComponent,
    MenuComponent,
    ScheduleComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'RedCottage-Angular';
  isMobileMenuOpen = signal(false);

  onMobileMenuStateChange(isOpen: boolean) {
    this.isMobileMenuOpen.set(isOpen);
  }
}
