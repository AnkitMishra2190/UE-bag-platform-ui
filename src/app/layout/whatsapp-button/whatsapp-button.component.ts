import { Component, inject } from '@angular/core';
import { NavDataService } from '../../core/services/nav-data.service';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  template: `
    <a
      [href]="'https://wa.me/' + navData.whatsappNumber"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      class="fixed bottom-6 left-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-colors"
    >
      <!-- Inline SVG so no extra icon library is needed for this one glyph -->
      <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
        <path
          d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.697 4.61 1.902 6.478L4 29l7.72-1.865A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm0 21.818c-1.86 0-3.6-.52-5.084-1.42l-.364-.216-4.58 1.107 1.144-4.47-.238-.376A9.77 9.77 0 0 1 5.2 15c0-5.964 4.837-10.8 10.801-10.8 5.963 0 10.8 4.836 10.8 10.8 0 5.963-4.837 10.818-10.8 10.818z"
        />
      </svg>
    </a>
  `,
})
export class WhatsAppButtonComponent {
  readonly navData = inject(NavDataService);
}
