import { Component } from '@angular/core';
import { Pet } from './misc files/pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component-practice';
  species = ['fish','cat','dog']
  model = new Pet(1, 'Goldie', this.species[0])
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
