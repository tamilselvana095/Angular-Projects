import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id:String='';
  name:String='';
  constructor(private activatedRoute:ActivatedRoute){}

ngOnInit(): void {
  this.id=this.activatedRoute.snapshot.params['id'],
  this.name=this.activatedRoute.snapshot.params['name']
}



}
