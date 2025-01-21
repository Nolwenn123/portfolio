import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-page',
  templateUrl: './password-page.component.html',
  styleUrls: ['./password-page.component.css']
})
export class PasswordPageComponent {
  passwordInput = '';
  errorMessage = '';

  constructor(private router: Router) {}

  checkPassword() {
    const correctPassword = 'nb'; 
    if (this.passwordInput === correctPassword) {
      this.router.navigate(['/home']);  // Navigate to the main content
    } else {
      this.errorMessage = 'Incorrect password. Please try again.';
    }
  }
    
  
}
