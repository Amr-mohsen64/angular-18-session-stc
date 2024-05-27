import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ParentComponent } from './components/fallback-content/parent/parent.component';
import { ZonelessComponent } from './components/zoneless/zoneless.component';
import { CustomInputComponent } from './components/form-features/custom-input/custom-input.component';
import { CustomFormComponent } from './components/form-features/custom-form/custom-form.component';

export const routes: Routes = [
  {
    path: 'user/:id',
    // redirectTo: 'profile',
    redirectTo: (urlInfo) => {
      // you can do what ever u want here with this object
      // u can handle logic on the fly here
      console.log(urlInfo);
      return 'profile';
    },
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'fallback',
    component: ParentComponent,
  },
  {
    path: 'zoneless',
    component: ZonelessComponent,
  },
  {
    path: 'input',
    component: CustomInputComponent,
  },
  {
    path: 'form',
    component: CustomFormComponent,
  },
];
