import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ServerService } from './servers/server.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/server-edit/can-deactivate-guard.service';

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
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ServerService, AuthService, AuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

