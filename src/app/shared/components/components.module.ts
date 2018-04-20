import { NgModule } from '@angular/core';
import { AppNavigationModule } from './navigation/navigation.module';
import { AppHeaderModule } from './header/header.module';

const modules = [
  AppNavigationModule,
  AppHeaderModule
];

@NgModule({
  exports: [...modules],
  imports: [...modules]
})
export class ComponentsModule {}
