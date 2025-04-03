import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  fecharMenu() {
    const navbar = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;

    if (navbar?.classList.contains('show')) {
      navbarToggler?.click(); // simula clique no botão para retrair
    }
  }

  alternarModoEscuro() {
    document.body.classList.toggle('dark-mode');
  }



}
