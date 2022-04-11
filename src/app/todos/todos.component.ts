import { DataService } from './../shared/data.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { NgForm } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  showValidationErrors: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }



  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.dataService.addTodo(new Todo(form.value.text));
      form.reset();
    }
    else {
      this.showValidationErrors = true;
    }
  }

  onTodoClicked(todo:Todo){
    todo.completed = !todo.completed;

  }

  onEditClicked(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.dataService.updateTodo(index, todo)
  }

  onDeleteClicked(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.dataService.deleteTodo(index);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
