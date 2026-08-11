import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { LayoutComponent } from './layout/shell/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  // template: `<router-outlet />`,
  imports: [LayoutComponent],
  template: `<app-layout></app-layout>`,
})
export class AppComponent {
  // Injected at the root so the theme (and its localStorage/system-
  // preference resolution) is applied once, immediately on app boot —
  // before any page renders, avoiding a flash of the wrong theme.
  private theme = inject(ThemeService);
}
