import { Pipe, PipeTransform } from '@angular/core';
import { format, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  constructor() {}

  transform(value: string): string {
    return format(parseISO(value), 'dd MMMMMM yyyy', { locale: ru });
  }
}
