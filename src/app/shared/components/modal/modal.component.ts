import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  template: `
    <div class="modal-backdrop" (click)="close.emit()">
      <div class="modal-panel" (click)="$event.stopPropagation()">
        <header class="modal-header">
          <h2>{{ title }}</h2>
          <button type="button" class="modal-close" (click)="close.emit()" aria-label="Close">×</button>
        </header>
        <div class="modal-body">
          <ng-content />
        </div>
      </div>
    </div>
  `,
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() title = '';
  @Output() close = new EventEmitter<void>();
}
