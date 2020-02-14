import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user-service/user.service';
import { UserComponent } from './user-component/user.component';
import { UserListContainer } from './user-list-container/user-list-container';
import { UserFormContainer } from './user-form-container/user-form-container';
import { UserDetailContainer } from './user-detail-container/user-detail-container';
import { UserListPresentation } from './user-list-container/user-list-presentation/user-list-presentation';
import { UserFormPresentation } from './user-form-container/user-form-presentation/user-form-presentation';
import { UserDetailPresentation } from './user-detail-container/user-detail-presentation/user-detail-presentation';


@NgModule({
  declarations: [
    UserComponent,
    UserListContainer,
    UserFormContainer,
    UserDetailContainer,
    UserListPresentation,
    UserFormPresentation,
    UserDetailPresentation
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
