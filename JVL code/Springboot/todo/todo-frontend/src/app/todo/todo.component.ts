import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoServiceService } from './todo-service.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(private taskService: TodoServiceService){}
  
  newTask:Todo ={description:"",completed:false};

  createTask():void{
    this.taskService.createTask(this.newTask).subscribe((createdTask)=>{
      this.newTask={description:"",completed:false};
    })
  }


}
