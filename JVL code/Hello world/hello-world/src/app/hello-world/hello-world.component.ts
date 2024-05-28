import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  title='hello world';

  isDisable=true;

  name='tamil';
  Count:number=0;
  
  clickme(){
    this.Count++;
  }
    value='';
    value2='';
    handleInput(event:any){
      this.value=(event.target as HTMLInputElement).value
    }

    movieTitle='List of movies : ';
    movies=['jailer',
          'beast',
         'varisu',
         'thunivu'
          ]




}
