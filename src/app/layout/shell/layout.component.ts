import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { WhatsAppButtonComponent } from '../whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
    WhatsAppButtonComponent,
  ],
  template: `
    <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
      <app-header></app-header>

      <main class="flex-1">
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
      <app-scroll-to-top></app-scroll-to-top>
      <app-whatsapp-button></app-whatsapp-button>
    </div>
  `,
})
export class LayoutComponent {}
