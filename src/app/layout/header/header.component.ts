
import {
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';

import { RouterLink } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ThemeService } from '../../core/services/theme.service';
import { MegaMenuComponent } from '../mega-menu/mega-menu.component';
import { NavDataService } from '../../core/services/nav-data.service';


@Component({
  selector: 'app-header',

  standalone: true,

  imports: [
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MegaMenuComponent,
  ],

  templateUrl: './header.component.html',

  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  /*
   * ============================================================
   * SERVICES
   * ============================================================
   */

  readonly themeService = inject(ThemeService);

  readonly navData = inject(NavDataService);


  /*
   * ============================================================
   * STATE
   * ============================================================
   */

  /**
   * True when the user has scrolled down.
   *
   * Used by the template to add:
   * - shadow
   * - border
   */

  readonly isScrolled = signal(false);


  /**
   * Controls mobile navigation visibility.
   */

  readonly mobileMenuOpen = signal(false);


  /*
   * ============================================================
   * WINDOW SCROLL
   * ============================================================
   */

  @HostListener('window:scroll')
  onWindowScroll(): void {

    const scrollPosition = window.scrollY;

    this.isScrolled.set(scrollPosition > 8);
  }


  /*
   * ============================================================
   * MOBILE MENU
   * ============================================================
   */

  toggleMobileMenu(): void {

    this.mobileMenuOpen.update(
      (isOpen) => !isOpen
    );
  }


  closeMobileMenu(): void {

    this.mobileMenuOpen.set(false);
  }
}

