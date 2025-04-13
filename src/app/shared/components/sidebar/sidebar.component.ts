import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  showVentasMenu = false;

  showComprasMenu = false;

  showPretamosMenu = false;

  userName: string | null = null;

/*   constructor(public authService:AuthService){} */

  ngOnInit(): void {
    /* this.userName = this.authService.getUserName(); */
    console.log('Nombre del usuario:', this.userName);
  }


  toggleVentasMenu() {
    this.showVentasMenu = !this.showVentasMenu;
  }

  toggleComprasMenu() {
    this.showComprasMenu = !this.showComprasMenu;
  }

  togglePrestanosMenu() {
    this.showPretamosMenu = !this.showPretamosMenu;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (!target.closest('.ventas-menu')) {
      this.showVentasMenu = false;
    }

    if (!target.closest('.compras-menu')) {
      this.showComprasMenu = false;
    }

    if (!target.closest('.prestamos-menu')) {
      this.showPretamosMenu = false;
    }
  }
}
