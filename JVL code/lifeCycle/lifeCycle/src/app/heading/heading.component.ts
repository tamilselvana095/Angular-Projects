import { Component, Input,OnChanges, SimpleChanges,OnInit,DoCheck,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnChanges,OnInit,DoCheck,OnDestroy{
  @Input() text:String[]=[];
  noOfTitles=1;

  ngOnChanges(changes: SimpleChanges): void {

   // if(!changes['text'].isFirstChange()){
     // console.log('you are modifying the original data');
      console.log('ngOnChangesCalled',/*changes['text'].currentValue*/);
      
   // }
    
    
  }

  ngOnInit(): void {
    console.log('ngonInit called');
    this.text.push('hello world');
  }
  ngDoCheck(): void {
    if(this.text.length>this.noOfTitles){
 
      console.log('you are modifying the original data');
      console.log('ngDoCheck called');
      console.log(this.noOfTitles);
      this.noOfTitles++;
  }
}
ngOnDestroy(): void {
  console.log('ngOnDestroy called');
}

}
