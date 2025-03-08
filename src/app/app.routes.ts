import { Routes } from '@angular/router';
import { AboutComponent } from './sections/about/about.component';
import { ScheduleComponent } from './sections/schedule/schedule.component';
import { WelcomeComponent } from './sections/welcome/welcome.component';
import { ContactComponent } from './sections/contact/contact.component';
import { MenuComponent } from './sections/menu/pages/menu/menu.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'contact', component: ContactComponent },

  { path: '*', pathMatch: 'full', redirectTo: 'home' },
];
