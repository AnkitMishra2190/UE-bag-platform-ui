import { Component, signal, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  template: `
    @if (visible()) {
      <button
        mat-mini-fab
        color="primary"
        type="button"
        aria-label="Scroll to top"
        class="fixed bottom-6 right-6 z-40 shadow-lg"
        (click)="scrollToTop()"
      >
        <mat-icon>arrow_upward</mat-icon>
      </button>
    }
  `,
})
export class ScrollToTopComponent {
  readonly visible = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.visible.set(window.scrollY > 400);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
