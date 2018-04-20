import { NgModule } from '@angular/core';
import { AppContainerComponent } from './container.component';

const components = [
  AppContainerComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class AppContainerModule {}
