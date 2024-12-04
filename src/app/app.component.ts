import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { ViewportScroller, CommonModule } from '@angular/common'; // Importa los servicios necesarios
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule], // Incluye CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrige typo de 'styleUrl' a 'styleUrls'
})
export class AppComponent {
  title = 'im-electric';

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]); // Restaura el scroll al inicio
      }
    });
  }
}
