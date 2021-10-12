import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceStarsForSpans'
})
export class ReplaceStarsForSpansPipe implements PipeTransform {

  /**
   * this pipe take a string, and replace stars by span with an another font & weight
   * Usage :
   *    title | replaceStarsForSpans
   * @param value string
   * @return any
   */
  transform(value: string): any {
    return value.replace(/(\*)(\w+|\w[']\w+|\?)(\*)/g, "<span class='font-playfair italic font-black leading-tight'>$2</span>");
  }
}
