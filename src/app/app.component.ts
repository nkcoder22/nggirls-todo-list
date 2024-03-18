import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListManagerComponent } from './list-manager/list-manager.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListManagerComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' 
})
export class AppComponent {
  title = 'My To-Do List App';

  
}
