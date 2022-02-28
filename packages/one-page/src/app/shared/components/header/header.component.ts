import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aop-header',
  styleUrls: ['header.component.scss'],
  template: `
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">Welcome To Our Studio!</div>
          <div class="intro-heading text-uppercase">It's Nice To Meet You</div>
          <a
            class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#services"
            >Tell Me More</a
          >
        </div>
      </div>
    </header>
  `,
})
export class AppHeaderComponent {}
