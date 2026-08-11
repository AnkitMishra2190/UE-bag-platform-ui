import { Component } from '@angular/core';

import { HeroComponent } from './sections/hero/hero.component';
import { CompanyIntroComponent } from './sections/company-intro/company-intro.component';
import { FeaturedProductsComponent } from './sections/featured-products/featured-products.component';
import { IndustriesComponent } from './sections/industries/industries.component';
import { WhyChooseUsComponent } from './sections/why-choose-us/why-choose-us.component';
import { StatsComponent } from './sections/stats/stats.component';
import { CertificationsComponent } from './sections/certifications/certifications.component';
import { ClientLogosComponent } from './sections/client-logos/client-logos.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { LatestBlogsComponent } from './sections/latest-blogs/latest-blogs.component';
import { ContactCtaComponent } from './sections/contact-cta/contact-cta.component';

// Phase 4: real Home page content, composed from 11 focused, reusable
// section components (spec's Home Page module list). Each section owns
// its own mock data shaped exactly like the future API response, so
// swapping to real HTTP calls later only touches the section, never
// this composition or the other sections.
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    CompanyIntroComponent,
    FeaturedProductsComponent,
    IndustriesComponent,
    WhyChooseUsComponent,
    StatsComponent,
    CertificationsComponent,
    ClientLogosComponent,
    TestimonialsComponent,
    LatestBlogsComponent,
    ContactCtaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
