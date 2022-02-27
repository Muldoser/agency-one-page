import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aop-main-page',
  styleUrls: ['main-page.component.scss'],
  templateUrl: './main-page.component.html'
})
export class AppMainPageComponent {
}
