import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet />

    <a class="whatsapp-float" href="https://wa.me/5585997277128" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    </a>

    @if (showTop()) {
      <button class="back-to-top" (click)="scrollToTop()" aria-label="Voltar ao topo">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    }
  `,
  styles: [`
    .whatsapp-float {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999;
      display: grid;
      place-items: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #25D366;
      color: #fff;
      box-shadow: 0 4px 20px rgba(37,211,102,.35);
      transition: transform .2s ease, box-shadow .2s ease;
      text-decoration: none;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 30px rgba(37,211,102,.45);
      }
    }

    .back-to-top {
      position: fixed;
      bottom: 92px;
      right: 24px;
      z-index: 999;
      display: grid;
      place-items: center;
      width: 44px;
      height: 44px;
      border: 1px solid var(--line);
      border-radius: 50%;
      background: #fff;
      color: #4b5563;
      cursor: pointer;
      box-shadow: 0 2px 12px rgba(15,23,42,.08);
      transition: transform .2s ease, box-shadow .2s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(15,23,42,.12);
      }
    }
  `]
})
export class App {
  protected readonly showTop = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.showTop.set(window.scrollY > 600);
  }

  protected scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
