import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ServerService } from './servers/server.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { ServerDetailComponent } from './servers/server-detail/server-detail.component';
import { UserListItemComponent } from './users/user-list/user-list-item/user-list-item.component';
import { ServerItemComponent } from './servers/server-item/server-item.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'users/:id/:name', component: UserDetailComponent },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerDetailComponent },
      { path: ':id/edit', component: ServerEditComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    ServersComponent,
    UserListComponent,
    UserDetailComponent,
    ServerEditComponent,
    ServerDetailComponent,
    UserListItemComponent,
    ServerItemComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ServerService],
  bootstrap: [AppComponent],
})
export class AppModule {}

