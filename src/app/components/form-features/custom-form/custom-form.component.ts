import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormResetEvent,
  FormSubmittedEvent,
  PristineChangeEvent,
  ReactiveFormsModule,
  StatusChangeEvent,
  TouchedChangeEvent,
  Validators,
  ValueChangeEvent,
} from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <input type="text" formControlName="name" placeholder="Enter your name" />
      <input
        type="text"
        formControlName="email"
        placeholder="Enter your Email"
      />
      <button type="submit">Submit</button>
      <br />
      <button type="reset">Reset</button>
    </form>
  `,
})
export class CustomFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl(''),
  });

  ngOnInit(): void {
    this.form.events.subscribe((event) => {
      if (event instanceof TouchedChangeEvent) {
        console.log('Touched ', event.touched);
      }

      if (event instanceof PristineChangeEvent) {
        console.log('Pristine', event.pristine);
      }

      if (event instanceof ValueChangeEvent) {
        console.log('ValueChange ', event.value);
      }

      if (event instanceof StatusChangeEvent) {
        console.log('Status ', event.status);
      }

      if (event instanceof FormSubmittedEvent) {
        console.log('Form Submitted');
      }

      if (event instanceof FormResetEvent) {
        console.log('Form reset');
      }
    });
  }
}
