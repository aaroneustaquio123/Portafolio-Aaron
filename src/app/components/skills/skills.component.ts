import { Component, ElementRef, AfterViewInit, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, SkillCategory } from '../../services/portfolio.service';
import { IconComponent } from '../icon/icon.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
  portfolioService = inject(PortfolioService);
  categories: SkillCategory[] = this.portfolioService.skillCategories;

  selectedCategory = signal<string>('Todas');

  @ViewChild('skillsSection') skillsSection!: ElementRef<HTMLElement>;
  @ViewChild('skillsGrid') skillsGrid!: ElementRef<HTMLElement>;

  get categoryList(): string[] {
    return ['Todas', ...this.categories.map(c => c.category)];
  }

  get filteredCategories(): SkillCategory[] {
    if (this.selectedCategory() === 'Todas') {
      return this.categories;
    }
    return this.categories.filter(c => c.category === this.selectedCategory());
  }

  ngAfterViewInit(): void {
    this.initScrollStagger();
  }

  selectCategory(cat: string): void {
    this.selectedCategory.set(cat);
    setTimeout(() => this.animateCards(), 50);
  }

  private initScrollStagger(): void {
    gsap.fromTo('.skill-category-card',
      { opacity: 0, y: 35, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: this.skillsSection.nativeElement,
          start: 'top 75%'
        }
      }
    );
  }

  private animateCards(): void {
    gsap.fromTo('.skill-item-card',
      { opacity: 0, scale: 0.85, y: 15 },
      { opacity: 1, scale: 1, y: 0, stagger: 0.04, duration: 0.4, ease: 'back.out(1.4)' }
    );
  }
}
