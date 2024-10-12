import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  PristineChangeEvent,
  ReactiveFormsModule,
  StatusChangeEvent,
  TouchedChangeEvent,
  ValueChangeEvent,
} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `<input
    type="text"
    [formControl]="name"
    placeholder="Enter your name"
  /> `,
})
export class CustomInputComponent implements OnInit {
  name = new FormControl('');

  ngOnInit(): void {
    this.name.events.subscribe((event) => {
      if (event instanceof TouchedChangeEvent) {
        console.log('Touched ', event.touched);
      }

      if (event instanceof PristineChangeEvent) {
        console.log('Pristine', event.pristine);
      }

      if (event instanceof ValueChangeEvent) {
        console.log('ValueChange ', event.value);
        console.log(event.source);

      }
      if (event instanceof StatusChangeEvent) {
        console.log('Status ', event.status);
      }
    });
  }
}
