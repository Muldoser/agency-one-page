import { NgModule } from '@angular/core';
import { AppSectionComponent } from './section.component';

const components = [
  AppSectionComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class AppSectionModule {}
