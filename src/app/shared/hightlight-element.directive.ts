import { Directive, ElementRef, OnInit, Renderer2, HostListener } from "@angular/core";

@Directive({
    selector:'[appHighlight]'
})
export class HighlightElementDirective implements OnInit{
    // ngOnInit(){
    //    this.elementRef.nativeElement.style.backgroundColor='yellow';
    // }

    constructor(private render:Renderer2,private elementRef:ElementRef){        
    }

    ngOnInit(){
        this.render.setStyle(this.elementRef.nativeElement,'background-color','red')
    }

    @HostListener('mouseover')mouseover(){
        this.render.setStyle(this.elementRef.nativeElement,'background-color','blue')
    }
}