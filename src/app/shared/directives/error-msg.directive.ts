import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _msg: string = 'This field is required';
  htmlElement: ElementRef<HTMLElement>;

  @Input() set msg(errorText: string) {
    this._msg = errorText;
    this.setMsg();
  }

  @Input() set valid(isValid: boolean) {
    if (isValid === true) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setMsg();
  }

  setMsg(): void {
    this.htmlElement.nativeElement.innerHTML = this._msg;
  }

}