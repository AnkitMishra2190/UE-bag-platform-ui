import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { WhyChooseUsPoint } from '../../../../core/models/home-content.model';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss',
})
export class WhyChooseUsComponent {
  readonly points: WhyChooseUsPoint[] = [
    { icon: 'workspace_premium', title: 'Quality Manufacturing', description: 'ISO-aligned processes at every stage of production.' },
    { icon: 'schedule', title: 'On-Time Delivery', description: 'Reliable bulk-order fulfillment, on schedule.' },
    { icon: 'design_services', title: 'Custom Designs', description: 'Private-label and custom specification manufacturing.' },
    { icon: 'payments', title: 'Competitive Pricing', description: 'Direct-from-factory pricing for bulk buyers.' },
  ];
}
