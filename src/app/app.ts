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
    if (window.matchMedia('(pointer: fine)').matches) {
      this.initSpotlightTracker();
    } else {
      const spotlight = document.getElementById('mouse-spotlight');
      if (spotlight) spotlight.style.display = 'none';
    }
  }

  private initSpotlightTracker(): void {
    const spotlight = document.getElementById('mouse-spotlight');
    if (!spotlight) return;

    let ticking = false;
    window.addEventListener('mousemove', (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          spotlight.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
}
