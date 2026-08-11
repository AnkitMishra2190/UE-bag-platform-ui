import { Injectable, effect, signal } from '@angular/core';

const THEME_KEY = 'unick_theme';
type Theme = 'light' | 'dark';

/**
 * Manages light/dark mode. On first visit (no saved preference), falls
 * back to the OS-level prefers-color-scheme setting rather than
 * defaulting to light — respecting a choice the user already made at
 * the system level. After that, the explicit choice always wins and
 * persists across sessions via localStorage.
 *
 * Applying the theme is a single attribute write (data-theme on
 * <html>) because every color in the app is a CSS custom property
 * (see _tokens.scss) — no component needs to know theming exists.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.resolveInitialTheme());

  constructor() {
    // Runs on init and every time theme() changes — keeps the DOM
    // attribute and localStorage in sync with the signal automatically.
    effect(() => {
      const value = this.theme();
      document.documentElement.setAttribute('data-theme', value);
      localStorage.setItem(THEME_KEY, value);
    });
  }

  private resolveInitialTheme(): Theme {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    if (saved === 'light' || saved === 'dark') return saved;

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  toggle() {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  }
}
