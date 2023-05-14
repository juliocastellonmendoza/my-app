import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  //value viene de nuestro html donde se listan los datos con el forEach
  transform(value: any, ...arg: any): any {
    if(arg=='' || arg.length < 1 ) return value;
    const resultGet = [];
    for(const use of value){
      //toLowerCase para que funcione entre mayusculas y minusculas
      if(use.title.indexOf(arg) > -1){
        resultGet.push(use);

      };
    };
    return resultGet;
  }

}
