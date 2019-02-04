import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el:ElementRef) {}

  @Input('appInputFormat') format; //we used the format vars alias as the directives name so that we can bind
  //directive name as a property values and also the directive is perfomed on too.
   
  @HostListener('blur') onBlur(){
    let value :string =this.el.nativeElement.value;

    if(this.format=='lowercase'){
      this.el.nativeElement.value=value.toLowerCase();
    }else{
      this.el.nativeElement.value=value.toUpperCase();
    }
   }


}
