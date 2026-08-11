import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-company-intro',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './company-intro.component.html',
  styleUrl: './company-intro.component.scss',
})
export class CompanyIntroComponent {}
