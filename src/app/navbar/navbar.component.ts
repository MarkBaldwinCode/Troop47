import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isHome: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Check if the current route is the home route ("/")
        this.isHome = event.url === '/';
        console.log('isHomeRoute:', this.isHome); // Log the result to the console
      });
  }

  // Method to determine if the current route is the home route
  isHomeRoute(): boolean {
    return this.isHome;
  }
}
