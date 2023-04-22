import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton color-basic-focus-border="#fff" *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" color-basic-focus-border="#fff" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" color-basic-focus-border="#fff" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [`
    button {
      width: 100%;
      height: 100%;
      font-size: 5em !important;
    }
  `]
})
export class SquareComponent {

  @Input() value : 'X' | 'O';

}
