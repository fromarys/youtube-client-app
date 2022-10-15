import { Pipe, PipeTransform } from '@angular/core';
import linkifyHtml from 'linkify-html';

@Pipe({
  name: 'linkify',
})
export class LinkifyPipe implements PipeTransform {
  transform(value: string | undefined): string | undefined {
    return value ? linkifyHtml(value, { defaultProtocol: 'https' }) : value;
  }
}
