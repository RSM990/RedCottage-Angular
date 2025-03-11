import { Component } from '@angular/core';
import { ContentPageComponent } from '../../shared/components/content-page/content-page.component';

@Component({
  selector: 'app-welcome',
  imports: [ContentPageComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {}
