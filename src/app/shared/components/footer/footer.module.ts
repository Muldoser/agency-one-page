import { NgModule } from '@angular/core';
import { AppFooterComponent } from './footer.component';

const components = [
  AppFooterComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class AppFooterModule {}
