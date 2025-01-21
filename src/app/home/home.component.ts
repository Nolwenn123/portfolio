import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
