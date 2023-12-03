import { Component } from '@angular/core';

@Component({
  selector: 'custom-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent {

  title = 'angular';
  myOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    // ... other options
  ];
  selectedOption: string = '2';

  onClick() {
    console.log('Button clicked!');
  }



}


