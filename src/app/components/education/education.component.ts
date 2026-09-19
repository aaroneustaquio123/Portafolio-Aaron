import { Component, ElementRef, AfterViewInit, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Education, Certification } from '../../services/portfolio.service';
import { IconComponent } from '../icon/icon.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements AfterViewInit {
  portfolioService = inject(PortfolioService);
  education: Education = this.portfolioService.education;
  certification: Certification = this.portfolioService.certification;

  certModalOpen = signal(false);

  @ViewChild('eduSection') eduSection!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    gsap.fromTo('.edu-card',
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.eduSection.nativeElement,
          start: 'top 75%'
        }
      }
    );
  }

  openCertModal(): void {
    this.certModalOpen.set(true);
  }

  closeCertModal(): void {
    this.certModalOpen.set(false);
  }
}
