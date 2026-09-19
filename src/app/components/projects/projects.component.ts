import { Component, ElementRef, AfterViewInit, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
import { PortfolioService, Project } from '../../services/portfolio.service';
import { IconComponent } from '../icon/icon.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('modalOverlay', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('modalContent', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9) translateY(20px)' }),
        animate('300ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.95) translateY(10px)' }))
      ])
    ])
  ]
})
export class ProjectsComponent implements AfterViewInit {
  portfolioService = inject(PortfolioService);
  projects: Project[] = this.portfolioService.projects;

  selectedProject = signal<Project | null>(null);

  @ViewChild('projectsSection') projectsSection!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.initScrollReveal();
  }

  openProjectModal(proj: Project, event?: MouseEvent): void {
    if (event) {
      const target = event.target as HTMLElement;
      // Don't trigger modal if user explicitly clicked direct external link button
      if (target.closest('.live-link-btn')) {
        return;
      }
    }
    this.selectedProject.set(proj);
  }

  closeModal(): void {
    this.selectedProject.set(null);
  }

  private initScrollReveal(): void {
    gsap.fromTo('.project-card',
      { opacity: 0, y: 50, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.projectsSection.nativeElement,
          start: 'top 75%'
        }
      }
    );
  }
}
