import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoggedDirective } from './directives/is-logged.directive';
import { IfRoleDirective } from './directives/if-role.directive';
import { MaterialModule } from './material/material.module';
import { SnackbarComponent } from './snackbar/snackbar.component';




@NgModule({
  declarations: [
    IsLoggedDirective,
    IfRoleDirective,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    IsLoggedDirective,
    IfRoleDirective,
    SnackbarComponent
  ]
})
export class SharedModule { }
