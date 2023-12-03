import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-check-box',
  templateUrl: './custom-check-box.component.html',
  styleUrls: ['./custom-check-box.component.css']
})
export class CustomCheckBoxComponent {
  @Input() label: string = ''; // Optional label for the checkbox
  isChecked: boolean = false; // Tracks the checked state

  // You can also include additional logic or methods as needed
}
