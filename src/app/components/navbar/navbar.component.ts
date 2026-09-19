import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('mobileMenu', [
      state('closed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden',
        visibility: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: 1,
        visibility: 'visible'
      })),
      transition('closed <=> open', [
        animate('300ms cubic-bezier(0.16, 1, 0.3, 1)')
      ])
    ])
  ]
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  activeSection = signal('inicio');

  navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'educacion', label: 'Educación' },
    { id: 'contacto', label: 'Contacto' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 40);

    // Active link update based on scroll position
    const sections = this.navItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 120;

    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = sections[i];
      if (sec && sec.offsetTop <= scrollPosition) {
        this.activeSection.set(this.navItems[i].id);
        break;
      }
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  scrollToSection(id: string): void {
    this.mobileMenuOpen.set(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
