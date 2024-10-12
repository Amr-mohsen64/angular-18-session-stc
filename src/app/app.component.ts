import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZonelessComponent } from './components/zoneless/zoneless.component';
import { ParentComponent } from './components/fallback-content/parent/parent.component';
import { NavComponent } from './components/nav/nav.component';
import { CustomFormComponent } from './components/form-features/custom-form/custom-form.component';
import { CustomInputComponent } from './components/form-features/custom-input/custom-input.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ZonelessComponent,
    ParentComponent,
    NavComponent,
    CustomFormComponent,
    CustomInputComponent,
  ],
  template: `<h1>ANGULAR 18 features</h1>
    <app-nav></app-nav>
    <router-outlet></router-outlet>`,
})
export class AppComponent {}
