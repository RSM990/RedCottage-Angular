import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-scroll-navigation',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './scroll-navigation.component.html',
  styleUrls: ['./scroll-navigation.component.scss'],
})
export class ScrollNavigationComponent implements OnInit {
  sections = ['home', 'about', 'menu', 'schedule', 'contact'];
  activeSection: string = this.sections[0];
  isMobileMenuOpen = false;

  private observer!: IntersectionObserver;
  private isManualScrolling = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollToSectionById(fragment);
      }
    });
    this.observeSections();
  }

  scrollToSection(event: Event, section: string): void {
    event.preventDefault();
    this.isManualScrolling = true;
    this.activeSection = section;
    this.scrollToSectionById(section);
    if (this.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
    setTimeout(() => {
      this.isManualScrolling = false;
    }, 1000); // Adjust the timeout as needed
  }

  scrollToSectionById(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  observeSections(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.isManualScrolling) {
          this.activeSection = entry.target.id;
          this.location.replaceState(this.router.url.split('#')[0]);
          this.autoScrollToNextHeading(entry.target);
        }
      });
    }, options);

    this.sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        this.observer.observe(element);
      }
    });
  }

  autoScrollToNextHeading(currentElement: Element): void {
    const rect = currentElement.getBoundingClientRect();
    if (
      rect.top < window.innerHeight / 2 &&
      rect.bottom > window.innerHeight / 2
    ) {
      currentElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  trackBySection(index: number, section: string): string {
    return section;
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}
