import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {


  constructor(/*public authService: AuthService,*/ private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    // this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
