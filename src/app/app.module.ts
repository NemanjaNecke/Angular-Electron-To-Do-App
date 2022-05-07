

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { OverlayModule } from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AwesomeTooltipDirective } from './tooltip/tooltip.directive';
import { AwesomeTooltipComponent } from './tooltip/tooltip.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    EditTodoComponent,
    AwesomeTooltipComponent,
    AwesomeTooltipDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OverlayModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
