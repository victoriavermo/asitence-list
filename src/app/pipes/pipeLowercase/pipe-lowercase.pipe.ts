import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeLowercase'
})
export class PipeLowercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    const parametro = args[0] as any;
    const parametro2 = args[1];

    console.log('Parametro:', parametro);
    console.log('Parametro2:', parametro2);




    return value.toLowerCase().substring(parametro);
  }

}
