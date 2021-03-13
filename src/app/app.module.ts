import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { ServerService } from './servers/server.service';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [AppComponent, ServersComponent, ServerComponent, TruncatePipe],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [ServerService],
  bootstrap: [AppComponent],
})
export class AppModule {}

