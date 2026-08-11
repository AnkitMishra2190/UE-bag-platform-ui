import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavDataService } from '../../core/services/nav-data.service';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly navData = inject(NavDataService);
  private readonly fb = inject(FormBuilder);

  readonly currentYear = new Date().getFullYear();

  // Shell only for Phase 2 — wired to a real newsletter API endpoint
  // when the backend's Website Settings / newsletter API is built.
  readonly newsletterForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  onSubscribe(): void {
    if (this.newsletterForm.invalid) {
      this.newsletterForm.markAllAsTouched();
      return;
    }
    // TODO: connect to newsletter subscription API (later phase)
    console.log('Newsletter signup:', this.newsletterForm.value.email);
    this.newsletterForm.reset();
  }
}
