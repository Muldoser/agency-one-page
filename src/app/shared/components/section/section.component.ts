import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  styleUrls: ['section.component.scss'],
  template: `
  <section id="about">
    <div class="container">
    <ng-content></ng-content>
    </div>
  </section>
  `
})
export class AppSectionComponent {}
