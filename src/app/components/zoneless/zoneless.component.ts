import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  signal,
} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-zoneless',
  standalone: true,
  imports: [AsyncPipe],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- <div>{{ currentPage }}</div> -->
    <!-- <div>{{ currentPageSignal() }}</div> -->
    <!-- <div>{{ currentPage$ | async }}</div> -->
    <div>
      <button (click)="afterEvent = 999">Click Me</button> {{ afterEvent }}
    </div>
  `,
})
export class ZonelessComponent {
  cdr = inject(ChangeDetectorRef);
  currentPage = 0;
  currentPageSignal = signal(1);
  currentPage$ = interval(1000);
  afterEvent = 0;

  ngOnInit() {
    // setTimeout(() => {
    //   this.currentPage += 1;
    //   // this.cdr.markForCheck();
    // }, 2200);
    // setTimeout(() => {
    //   this.currentPageSignal.set(2);
    // }, 2200);
  }

  /**
   * if you want to use zoneless in modern applications use onPush change detection
   *  because will not be trigged by it self and you have to manually call markForCheck
   * use async pipe or signals
   *
   * so angular will trigger change detection
   *   - input value has been changes
   *   - event handlers (manullay triggers)
   *   - async pipe
   *    - signal updates
   *   */
}
