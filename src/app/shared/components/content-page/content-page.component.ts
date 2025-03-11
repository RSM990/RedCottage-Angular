import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss',
})
export class ContentPageComponent {
  @Input() title: string = '';
  @Input() textContent: boolean = true;
}
