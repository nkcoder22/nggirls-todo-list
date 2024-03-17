import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.scss'
})
export class InputButtonUnitComponent {

  title="Hello World";

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }

}
