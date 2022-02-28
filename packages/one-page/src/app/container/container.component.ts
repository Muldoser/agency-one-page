import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aop-container',
  styleUrls: ['./container.component.scss'],
  template: ` <ng-content></ng-content> `,
})
export class AppContainerComponent {}
