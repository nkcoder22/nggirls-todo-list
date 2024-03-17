import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputButtonUnitComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' 
})
export class AppComponent {
  title = 'todo-list';
}
