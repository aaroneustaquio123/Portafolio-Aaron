import { Component, AfterViewInit } from '@angular/core';
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
    // Only enable heavy mouse tilt and spotlight on desktop devices with fine pointers
    if (window.matchMedia('(pointer: fine)').matches) {
      this.initGlobalInteractiveTilt();
      this.initSpotlightTracker();
    } else {
      const spotlight = document.getElementById('mouse-spotlight');
      if (spotlight) spotlight.style.display = 'none';
    }
  }

  private initSpotlightTracker(): void {
    const spotlight = document.getElementById('mouse-spotlight');
    if (!spotlight) return;

    const xTo = gsap.quickTo(spotlight, 'x', { duration: 0.3, ease: 'power2.out' });
    const yTo = gsap.quickTo(spotlight, 'y', { duration: 0.3, ease: 'power2.out' });

    window.addEventListener('mousemove', (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    }, { passive: true });
  }

  private initGlobalInteractiveTilt(): void {
    let ticking = false;

    window.addEventListener('mousemove', (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const target = e.target as HTMLElement;
          const card = target?.closest('.project-card, .skill-item-card, .contact-box') as HTMLElement;

          if (card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const tiltX = (y / (rect.height / 2)) * -5;
            const tiltY = (x / (rect.width / 2)) * 5;

            gsap.to(card, {
              rotateX: tiltX,
              rotateY: tiltY,
              transformPerspective: 1000,
              duration: 0.25,
              ease: 'power1.out',
              overwrite: 'auto'
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    window.addEventListener('mouseout', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target?.closest('.project-card, .skill-item-card, .contact-box') as HTMLElement;

      if (card) {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    }, { passive: true });
  }
}
