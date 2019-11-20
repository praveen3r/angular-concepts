import { Directive, ElementRef, HostListener,Renderer2,Input, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[noSpecialChar]',
  host: {
    "(ngModelChange)": 'onInputChange($event)'
        }
  })
export class CommonDirective {

  //@Input() attrValue: string;
  @Input() noSpecialChar: string;
  //regexStr: string = "^[a-z0-9\s]*$";
  constructor(private el: ElementRef) {
    
   }

   //@HostListener('keypress', ['$event']) onKeyPress(event) {
    // return new RegExp(this.regexStr).test(event.key);
     /*let text: string = this.el.nativeElement.value;
     console.log(text);*/
     //let transformedInput: string = text.replace("/[^a-z0-9\s]*/gi", '');
     /*console.log(transformedInput);
     this.renderer.setProperty(this.el.nativeElement, 'value',transformedInput);*/
 // }
  /*@HostListener('change', ['$event']) onChange(event) {
    console.log("changed");
    return new RegExp(this.regexStr).test(event.key);
    
 }*/

 onInputChange($event){
   //this.value = $event.target.value.toUpperCase();
    /*let text: string = $event.target.value;
    console.log(text);*/
    //let transformedInput: string = text.replace(/[^a-z0-9\s]*/gi, "");
    /*console.log(transformedInput);
    this.ngModelChange.emit(transformedInput);*/
    //this.value = $event.target.value;
    //this.value = this.el.nativeElement.value;
    //this.transformedOutput = this.value.replace(/[^a-z0-9\s]*/gi, '');
    
    //this.ngModelChange.emit(this.transformedOutput);
   // this.el.nativeElement.value = this.transformedOutput;
   let text: string = this.el.nativeElement.value;
   let transformedInput: string;
   if(this.noSpecialChar=="S"){
      transformedInput = text.replace(/[^a-z0-9\s]*/gi, "");
    } else{
      transformedInput = text.replace(/[^a-z0-9]*/gi, "");
    }
    this.el.nativeElement.value = transformedInput;
  }


}
