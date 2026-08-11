import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Real headline/copy and hero imagery come from Admin > Banner Management
// (spec's "Homepage Banner") once the CMS exists — this is the structural
// + visual design for that content slot.
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',

})
export class HeroComponent {}
