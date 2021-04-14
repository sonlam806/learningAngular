import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Feature Modules
import { ShoppingListModule } from './shopping-list/shopping-list.module';

// Another modules
import { CoreModule } from './core.module';
import { ShareModule } from './shared/share.module';

// Components
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundPageComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    ShareModule,
    ShoppingListModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

