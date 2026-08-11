import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,

  imports: [
    MatIconModule,
    FormsModule
  ],

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  onSubmit(): void {
    console.log('Contact form:', this.contactForm);
  }

}