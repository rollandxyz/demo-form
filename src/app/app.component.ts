import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'app';

  btnClick(navTo: string) {
    this.router.navigateByUrl('/' + navTo);
  }
}
