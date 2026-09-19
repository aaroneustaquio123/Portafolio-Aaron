import { Component, ElementRef, AfterViewInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Experience } from '../../services/portfolio.service';
import { IconComponent } from '../icon/icon.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements AfterViewInit {
  portfolioService = inject(PortfolioService);
  experiences: Experience[] = this.portfolioService.experiences;

  @ViewChild('expSection') expSection!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.initTimelineAnimation();
  }

  private initTimelineAnimation(): void {
    gsap.fromTo('.timeline-item',
      { opacity: 0, y: 40, x: -20 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        stagger: 0.25,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.expSection.nativeElement,
          start: 'top 75%'
        }
      }
    );
  }
}
