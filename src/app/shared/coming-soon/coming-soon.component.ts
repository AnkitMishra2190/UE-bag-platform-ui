import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
        {{ title$ | async }}
      </h1>
      <p class="mt-2 text-gray-500 dark:text-gray-400">
        This page is scheduled for a later build phase.
      </p>
    </div>
  `,
})
export class ComingSoonComponent {
  private readonly route = inject(ActivatedRoute);
  readonly title$ = this.route.data.pipe(
    map((data) => (data['title'] as string) ?? 'Coming soon')
  );
}
