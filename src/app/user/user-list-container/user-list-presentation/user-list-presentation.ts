import { Component, OnInit } from '@angular/core';
import { UserListPresener } from '../user-list-presenter/user-list-presener';

@Component({
  selector: 'app-user-list-ui',
  templateUrl: './user-list-presentation.html',
  styleUrls: ['./user-list-presentation.scss'],
  providers: [UserListPresener]
})
export class UserListPresentation implements OnInit {

  constructor() { }

  ngOnInit() {
    const input = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const expand = () => {
      searchBtn.classList.toggle('close');
      input.classList.toggle('square');
    };
    searchBtn.addEventListener('click', expand);
  }

}
