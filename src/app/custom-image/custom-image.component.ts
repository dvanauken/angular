import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-image',
  templateUrl: './custom-image.component.html',
  styleUrls: ['./custom-image.component.css'] // optional if you have specific styles
})
export class CustomImageComponent {
  @Input() src: string = '';  // The source URL of the image
  @Input() alt: string = '';  // Alternative text for the image
  @Input() cssClass: string = '';  // Optional CSS class for styling
}
