import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.scss'
})
export class InputButtonUnitComponent {

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title="Hello World";

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }

}
