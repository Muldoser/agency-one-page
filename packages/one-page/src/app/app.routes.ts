import { AppMainPageComponent } from './pages/main-page/main-page.component';

export const appRoutes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' },
  { path: 'app', component: AppMainPageComponent },
];
