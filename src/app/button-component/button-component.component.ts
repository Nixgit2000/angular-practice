import { Component } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: 'button-component.component.html',
  styles: [`
  h1 {
    color: blue;
  }
  `]

})
export class ButtonComponentComponent {
  count: number = 0;
  incrementOne() {
    console.log('Button clicked.')
    this.count++;
  }
  decrementOne() {
    console.log('Button clicked.')
    this.count--;
  }
  
}
