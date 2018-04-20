import { NgModule } from '@angular/core';
import { AppNavigationModule } from './navigation/navigation.module';
import { AppHeaderModule } from './header/header.module';
import { AppFooterModule } from './footer/footer.module';
import { AppSectionModule } from './section/section.module';

const modules = [
  AppNavigationModule,
  AppHeaderModule,
  AppFooterModule,
  AppSectionModule
];

@NgModule({
  exports: [...modules],
  imports: [...modules]
})
export class ComponentsModule {}
