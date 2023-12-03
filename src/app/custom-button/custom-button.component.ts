import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {

  @Input() btnClass = 'green'; // Initial class

  @Output() btnClick = new EventEmitter<any>(); // Output event emitter

  constructor() { }

  onClick() {
    this.btnClass = this.btnClass === 'red' ? 'blue' : 'red';
    this.btnClick.emit();
  }

}
