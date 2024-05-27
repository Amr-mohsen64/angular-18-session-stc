import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styles: `
  .app-child-container {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .app-child-header,
  .app-child-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #34495e;
    color: #fff;
    padding: 10px 0;
  }

  .app-child-header {
    font-size: 1.5em;
    margin-bottom: 20px;
    border-radius: 10px 10px 0 0;
  }

  .app-child-footer {
    font-size: 1.2em;
    margin-top: 20px;
    border-radius: 0 0 10px 10px;
  }
}

`,
})
export class ParentComponent {}
