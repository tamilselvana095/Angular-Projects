import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  todo = { description: '', completed: false };

  constructor(private todoService: TodoService) {}

  onSubmit() {
    this.todoService.createTodo(this.todo)
      .subscribe(() => {
        // Optionally, perform any action after successfully creating the product
        console.log('Product created successfully');
      })
  }

}

export class Todo{
  description:String='';
  completed:boolean=false;
}
