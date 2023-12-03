import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ]
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() options: {label: string, value: any}[] = [];
  @Output() selectedValueChange = new EventEmitter<any>();

  // Internal value for the component
  private innerValue: any;

  // Placeholder for the onChange function
  private onChange: any = () => {};
  private onTouched: any = () => {};

  // Getter and setter for your component value
  get selectedValue() {
    return this.innerValue;
  }

  set selectedValue(val) {
    this.innerValue = val;
    this.onChange(val);
    this.selectedValueChange.emit(val);
  }

  // Write a new value to the element
  writeValue(value: any): void {
    if (value !== undefined) {
      this.selectedValue = value;
    }
  }

  // Set the function to be called when the control receives a change event
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Set the function to be called when the control receives a touch event
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
