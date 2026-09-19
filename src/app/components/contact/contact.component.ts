import { Component, ElementRef, AfterViewInit, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { IconComponent } from '../icon/icon.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;

  copiedField = signal<string | null>(null);
  formSubmitted = signal(false);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  @ViewChild('contactSection') contactSection!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    gsap.fromTo('.contact-box',
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.contactSection.nativeElement,
          start: 'top 75%'
        }
      }
    );
  }

  copyToClipboard(text: string, fieldName: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedField.set(fieldName);
      setTimeout(() => this.copiedField.set(null), 2500);
    });
  }

  submitForm(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.formSubmitted.set(true);
    setTimeout(() => {
      this.formSubmitted.set(false);
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 4000);
  }
}
