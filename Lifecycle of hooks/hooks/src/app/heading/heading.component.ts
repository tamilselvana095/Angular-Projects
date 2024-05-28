import { Component, Input ,OnChanges, SimpleChanges,
          OnInit} from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnChanges,OnInit {

  @Input() text='';

  ngOnChanges(changes: SimpleChanges): void {
   

    if(!changes['text'].firstChange){
      console.log('you are modifying the original value');
      console.log('changes call',  changes['text'].currentValue);
    }
  
  }

  ngOnInit(): void {
    console.log('ngOninit Called');
    this.text='Hello world';
  }

}
