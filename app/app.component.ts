import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blurBackground: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;

    // Vérifiez si l'utilisateur fait défiler vers le bas
    if (scrollPosition > 0) {
      this.blurBackground = true;
    } else {
      this.blurBackground = false;
    }
  }
  }
