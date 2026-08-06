import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder-page',
  standalone: true,
  template: `
    <div class="placeholder">
      <h1>{{ title }}</h1>
      <p class="text-muted">
        The <strong>{{ title }}</strong> API is fully built and functional. Its dedicated screen is scheduled
        as the next UI build step — this route is wired now so navigation is complete.
      </p>
    </div>
  `,
  styles: [
    `
      .placeholder {
        background: var(--color-surface);
        border: 1px dashed var(--color-border-strong);
        border-radius: var(--radius-lg);
        padding: var(--space-8);
        text-align: center;
      }
      h1 {
        font-size: var(--fs-lg);
        margin-bottom: var(--space-3);
      }
      p {
        max-width: 480px;
        margin: 0 auto;
      }
    `,
  ],
})
export class PlaceholderPageComponent {
  @Input() title = 'Module';
}
