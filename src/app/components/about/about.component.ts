import { Component, ElementRef, AfterViewInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { IconComponent } from '../icon/icon.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;

  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLElement>;
  @ViewChild('photoBox') photoBox!: ElementRef<HTMLElement>;
  @ViewChild('aboutContent') aboutContent!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  private initScrollAnimations(): void {
    gsap.fromTo(this.photoBox.nativeElement,
      { opacity: 0, x: -50, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.aboutSection.nativeElement,
          start: 'top 75%'
        }
      }
    );

    gsap.fromTo(this.aboutContent.nativeElement,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.aboutSection.nativeElement,
          start: 'top 75%'
        }
      }
    );
  }
}
