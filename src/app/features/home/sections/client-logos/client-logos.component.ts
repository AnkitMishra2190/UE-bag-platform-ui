import { Component } from '@angular/core';
import { ClientLogo } from '../../../../core/models/home-content.model';

@Component({
  selector: 'app-client-logos',
  standalone: true,
  templateUrl: './client-logos.component.html',
  styleUrl: './client-logos.component.scss',
})
export class ClientLogosComponent {
  // Real logos come from Admin > Gallery/Media Library once client
  // permissions to display their branding are on file.
  readonly clients: ClientLogo[] = [
    { name: 'RetailCo' },
    { name: 'Urban Mart' },
    { name: 'StyleHub' },
    { name: 'GlobalTrade' },
    { name: 'MetroStores' },
    { name: 'BagWorld' },
  ];
}
