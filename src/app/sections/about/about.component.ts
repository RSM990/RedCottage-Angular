import { Component } from '@angular/core';
import { ContentPageComponent } from '../../shared/components/content-page/content-page.component';

@Component({
  selector: 'app-about',
  imports: [ContentPageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
