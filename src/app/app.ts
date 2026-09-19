import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  title = 'Abel Aaron Orejon Eustaquio - Portafolio';

  ngAfterViewInit(): void {
    this.initGlobalInteractiveTilt();
  }

  @HostListener('document:mousemove', ['$event'])
  onGlobalMouseMove(e: MouseEvent): void {
    // Ambient Cursor Glow Spotlight
    const spotlight = document.getElementById('mouse-spotlight');
    if (spotlight) {
      gsap.to(spotlight, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power1.out'
      });
    }
  }

  private initGlobalInteractiveTilt(): void {
    document.addEventListener('mousemove', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest('.glass-card, .project-card, .skill-item-card, .contact-box') as HTMLElement;

      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const tiltX = (y / (rect.height / 2)) * -6;
        const tiltY = (x / (rect.width / 2)) * 6;

        gsap.to(card, {
          rotateX: tiltX,
          rotateY: tiltY,
          transformPerspective: 1000,
          duration: 0.3,
          ease: 'power1.out'
        });
      }
    });

    document.addEventListener('mouseout', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest('.glass-card, .project-card, .skill-item-card, .contact-box') as HTMLElement;

      if (card) {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: 'power2.out'
        });
      }
    });
  }
}
