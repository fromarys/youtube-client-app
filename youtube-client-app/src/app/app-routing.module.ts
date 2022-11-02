import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DetailsComponent } from './youtube/pages/details/details.component';
import { MainComponent } from './core/pages/main/main.component';
import { AdminComponent } from './youtube/pages/admin/admin.component';

const routes: Routes = [
  { path: '', component: MainComponent, canLoad: [AuthGuard] },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'search/:query',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'search',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canLoad: [AuthGuard],
  },
  { path: 'admin', component: AdminComponent, canLoad: [AuthGuard] },
  { path: 'item/:id', component: DetailsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
