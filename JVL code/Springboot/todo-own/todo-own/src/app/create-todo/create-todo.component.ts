import { Component } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  todo={description:'',completed:false}

  constructor(private todoService: TodoServiceService) {}

  onSubmit() {
    this.todoService.createTodo(this.todo)
      .subscribe(() => {
        // Optionally, perform any action after successfully creating the product
        console.log('Todo created successfully');
      });
  }


}
