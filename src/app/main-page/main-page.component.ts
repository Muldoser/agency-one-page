import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-page',
  styleUrls: [
    'main-page.component.scss',
    '../../scss/agency.scss',
    '../../../node_modules/bootstrap/scss/bootstrap.scss',
    '../../../node_modules/font-awesome/css/font-awesome.min.css'
  ],
  templateUrl: './main-page.component.html'
})
export class AppMainPageComponent {
}
