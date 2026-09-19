import { Component, ElementRef, AfterViewInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { IconComponent } from '../icon/icon.component';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;

  @ViewChild('heroSection') heroSection!: ElementRef<HTMLElement>;
  @ViewChild('heroBadge') heroBadge!: ElementRef<HTMLElement>;
  @ViewChild('heroTitle') heroTitle!: ElementRef<HTMLElement>;
  @ViewChild('heroRoles') heroRoles!: ElementRef<HTMLElement>;
  @ViewChild('heroSummary') heroSummary!: ElementRef<HTMLElement>;
  @ViewChild('heroCtas') heroCtas!: ElementRef<HTMLElement>;
  @ViewChild('heroStats') heroStats!: ElementRef<HTMLElement>;
  @ViewChild('heroGraphic') heroGraphic!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.initHeroEntranceTimeline();
  }

  private initHeroEntranceTimeline(): void {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(this.heroBadge.nativeElement, 
      { opacity: 0, y: -20, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.6 }
    )
    .fromTo(this.heroTitle.nativeElement, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      '-=0.3'
    )
    .fromTo(this.heroRoles.nativeElement.children, 
      { opacity: 0, x: -20 }, 
      { opacity: 1, x: 0, stagger: 0.15, duration: 0.5 }, 
      '-=0.4'
    )
    .fromTo(this.heroSummary.nativeElement, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6 }, 
      '-=0.3'
    )
    .fromTo(this.heroCtas.nativeElement.children, 
      { opacity: 0, y: 20, scale: 0.95 }, 
      { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.5 }, 
      '-=0.3'
    )
    .fromTo(this.heroGraphic.nativeElement, 
      { opacity: 0, scale: 0.8, rotate: -5 }, 
      { opacity: 1, scale: 1, rotate: 0, duration: 1 }, 
      '-=0.8'
    )
    .fromTo(this.heroStats.nativeElement.children, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 }, 
      '-=0.5'
    );
  }

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
