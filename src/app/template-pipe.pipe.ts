import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'templatePipe'
})
export class TemplatePipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return `Hello ${value} from a Pipe!`;
  }

}
