import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnInit {
  @Input() date: string | undefined;
  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    if (this.date) {
      this.element.nativeElement.style.borderBottom = `5px solid ${this.getColor()}`;
    }
  }

  getColor() {
    const month: number = this.getMonths();
    const day: number = this.getDays();
    if (month > 6) return 'red';
    if (month < 6 && month >= 1) return 'yellow';
    if (month < 6 && day > 7) return 'green';
    if (day < 7) return 'blue';
    return '';
  }

  getDiff() {
    const currentDate: Date = new Date();
    const prevDate: Date = new Date(this.date!);
    return currentDate.getTime() - prevDate.getTime();
  }

  getDays() {
    const difference = this.getDiff();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.round(difference / oneDay);
  }

  getMonths() {
    const difference = this.getDiff();
    const oneMonth = 1000 * 60 * 60 * 24 * 30;
    return Math.round(difference / oneMonth);
  }
}
