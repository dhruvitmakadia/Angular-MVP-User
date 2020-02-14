import { Component, OnInit } from '@angular/core';
import { UserFormPresenter } from '../user-form-presenter/user-form-presenter';

@Component({
  selector: 'app-user-form-ui',
  templateUrl: './user-form-presentation.html',
  styleUrls: ['./user-form-presentation.scss'],
  providers: [UserFormPresenter]
})
export class UserFormPresentation implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
