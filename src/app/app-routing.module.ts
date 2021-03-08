import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/server-edit/can-deactivate-guard.service';
import { ServerResolver } from './servers/server-resolver.service';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerDetailComponent } from './servers/server-detail/server-detail.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { ServersComponent } from './servers/servers.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserDetailComponent }],
  },
  {
    path: 'servers',
    component: ServersComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id',
        component: ServerDetailComponent,
        resolve: { server: ServerResolver },
      },
      {
        path: ':id/edit',
        component: ServerEditComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  // { path: '**', component: PageNotFoundComponent },
  {
    path: '**',
    component: ErrorPageComponent,
    data: { message: 'Error message' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

