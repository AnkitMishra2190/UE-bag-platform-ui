import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent {
  private api = inject(ApiService);

  ngOnInit() {
    this.api.getTest().subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err)
    });
  }
}
