import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Toggle between showing and hiding the sidebar, and add overlay effect
   */
  w3_open() {
    if (document.getElementById('mySidebar').style.display === 'block') {
      document.getElementById('mySidebar').style.display = 'none';
      document.getElementById('myOverlay').style.display = 'none';
    } else {
      document.getElementById('mySidebar').style.display = 'block';
      document.getElementById('myOverlay').style.display = 'block';
    }
  }
  /**
   * Close the sidebar with the close button
   */
  w3_close() {
    document.getElementById('mySidebar').style.display = 'none';
    document.getElementById('myOverlay').style.display = 'none';
  }
}
