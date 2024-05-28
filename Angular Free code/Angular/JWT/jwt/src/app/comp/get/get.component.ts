import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit{

  //user:User[]=[];

  samp:String=''
   constructor( private getService:UserService){}

   ngOnInit(): void {
     this.getService.getAll().subscribe(data=>{
      console.log(data),
      this.samp=data
      })
   }

   

}
