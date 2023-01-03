import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoggedDirective } from './directives/is-logged.directive';
import { IfRoleDirective } from './directives/if-role.directive';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    IsLoggedDirective,
    IfRoleDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    IsLoggedDirective,
    IfRoleDirective
  ]
})
export class SharedModule { }
