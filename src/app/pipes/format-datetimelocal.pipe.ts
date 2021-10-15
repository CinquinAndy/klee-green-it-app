import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatDatetimelocal'
})
export class FormatDatetimelocalPipe implements PipeTransform {

  transform(value: string): string {
    let date = new Date(value);
    const offset = date.getTimezoneOffset()
    date = new Date(date.getTime() - (offset * 60 * 1000))
    // @ts-ignore
    return (date.toISOString().match(/^.*T[0-9]+:[0-9]+/))[0]
  }

}
