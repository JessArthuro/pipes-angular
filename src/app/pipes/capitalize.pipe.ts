import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    value = value.toLocaleLowerCase();
    let nombres = value.split(' '); //se crea un arreglo del string separado por espacios.

    // condicional para capitalizar todas las palabras
    if (todas) {
      nombres = nombres.map((nombre) => {
        return nombre[0].toUpperCase() + nombre.substring(1);
      });
    } else {
      // sino solo se capitaliza la primera letra
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
    }

    return nombres.join(' ');
  }
}
