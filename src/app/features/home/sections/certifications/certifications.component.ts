import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Certification } from '../../../../core/models/home-content.model';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',

})
export class CertificationsComponent {
  readonly certifications: Certification[] = [
    { name: 'ISO 9001:2015', issuer: 'Quality Management' },
    { name: 'ISO 14001:2015', issuer: 'Environmental Management' },
    { name: 'ISO 27001', issuer: 'Information Security' },
  ];
}
