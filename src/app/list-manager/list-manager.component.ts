import { Component } from '@angular/core';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [InputButtonUnitComponent,TodoItemComponent],
  templateUrl: './list-manager.component.html',
  styleUrl: './list-manager.component.scss'
})
export class ListManagerComponent {
  titleList:TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(title: string) {    
    this.titleList.push({ title });
  }
}
