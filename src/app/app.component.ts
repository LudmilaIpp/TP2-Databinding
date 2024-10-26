import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';
import {CrudComponent} from './crud/crud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, CrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  focus : boolean = false;
  editable : boolean = false;
  showCrud : boolean = false;

  toggleContentEditable(){
    this.editable = !this.editable;
  }

  onMouseOver(){
    this.focus = true;
  }

  onClick() {
    this.focus = false;
    this.showCrud = true;
  }
}
