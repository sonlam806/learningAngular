import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core.module';
import { ShareModule } from '../shared/share.module';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CoreModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
      },
    ]),
  ],
  providers: [AuthService],
  exports: [RouterModule],
})
export class AuthModule {}

