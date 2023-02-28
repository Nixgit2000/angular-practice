import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  getMin(a: number,b: number) {
    if(a<b){
      return a;
    }
    return b;
  }

  getMax(a: number,b: number) {
    if(a>b){
      return a;
    }
    return b;
  }
}
