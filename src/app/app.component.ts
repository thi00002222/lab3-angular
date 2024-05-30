import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { StarComponent } from './component/star/star.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductlistComponent,StarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab3';
}
