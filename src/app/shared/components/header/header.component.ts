import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  /* constructor(private authService:AuthService){

  } */

  logout():void{
    /* this.authService.logout(); */
  }
}
