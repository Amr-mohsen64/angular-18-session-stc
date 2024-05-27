import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-zoneless',
  standalone: true,
  imports: [],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- <h1>Hello from {{ name() }}!</h1> -->
    <h1>Hello from {{ zoneName }}!</h1>
    <button (click)="handleClickWithZone()">Go Zone</button>
    <!-- <button (click)="handleClick()">Go Zoneless</button> -->
  `,
})
export class ZonelessComponent {
  protected zoneName = 'Zone Angular';
  // protected name = signal('Angular');

  ngOnInit() { 
    setTimeout(() => {
      this.zoneName = 'test OnPush Angular';
    }, 2200);
  }

  handleClickWithZone() {
    this.zoneName = 'Cshangesd Zone Angular';
  }

  // handleClick() {
  //   this.name.set('Zoneless Angular');
  // }
}
