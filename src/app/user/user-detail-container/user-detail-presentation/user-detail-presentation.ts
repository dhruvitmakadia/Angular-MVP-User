import { Component, OnInit } from '@angular/core';
import { UserDetailPresenter } from '../user-detail-presenter/user-detail-presenter';

@Component({
  selector: 'app-user-detail-ui',
  templateUrl: './user-detail-presentation.html',
  styleUrls: ['./user-detail-presentation.scss'],
  providers: [UserDetailPresenter]
})
export class UserDetailPresentation implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
