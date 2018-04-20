import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <app-container>
      <router-outlet></router-outlet>
    </app-container>
  `
})
export class AppComponent {}
