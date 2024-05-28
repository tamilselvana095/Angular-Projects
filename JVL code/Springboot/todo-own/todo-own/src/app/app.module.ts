import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule , Routes} from '@angular/router';
import { TodoServiceService } from './todo-service.service';


const appRoutes:Routes=[
  {
    path : '',component:CreateTodoComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
