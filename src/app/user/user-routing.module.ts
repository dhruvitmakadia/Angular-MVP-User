import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user-component/user.component';
import { UserListContainer } from './user-list-container/user-list-container';
import { UserFormContainer } from './user-form-container/user-form-container';
import { UserDetailContainer } from './user-detail-container/user-detail-container';


const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'list',
        component: UserListContainer
      },
      {
        path: 'add',
        component: UserFormContainer
      },
      {
        path: 'edit/:id',
        component: UserFormContainer
      },
      {
        path: 'detail',
        component: UserDetailContainer
      }
    ]
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
