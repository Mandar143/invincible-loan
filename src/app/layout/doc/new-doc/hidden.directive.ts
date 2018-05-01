import { Input,Directive, ElementRef, Renderer, Renderer2 ,HostListener, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[noIf]'
})
export class HiddenDirective {
  
 @Input() set noIf(con:boolean){
    
    if(!con){
      this.vcRef.createEmbeddedView(this.tmRef)
    }
    else{
      this.vcRef.clear()
    }
  }
  constructor(
    private tmRef:TemplateRef<any>,
    private vcRef : ViewContainerRef){
     // this.elRef.nativeElement.style.width='600px'
     //this.rend.setStyle(this.elRef.nativeElement,'display','none')
  }

 

}
