import { Injectable, effect, signal } from '@angular/core';

const THEME_KEY = 'unick_theme';

type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.resolveInitialTheme());

  constructor() {
    effect(() => {
      const value = this.theme();
      const html = document.documentElement;

      // Existing CSS-variable theme system
      html.setAttribute('data-theme', value);

      // Tailwind dark mode
      html.classList.toggle('dark', value === 'dark');

      // Persist preference
      localStorage.setItem(THEME_KEY, value);
    });
  }

  private resolveInitialTheme(): Theme {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;

    if (saved === 'light' || saved === 'dark') {
      return saved;
    }

    const prefersDark =
      window.matchMedia?.('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
  }

  toggle(): void {
    this.theme.set(
      this.theme() === 'dark' ? 'light' : 'dark'
    );
  }
}