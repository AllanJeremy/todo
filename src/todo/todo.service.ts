import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/createTodo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';

import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  /** Adds a todo item and returns the added item */
  addTodo(todoItem: CreateTodoDto): CreateTodoDto {
    todoItem.id = Math.floor(Math.random() * 10000);
    todoItem.isDone = todoItem.isDone || false;

    this.todos.push(todoItem);
    return todoItem;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  updateTodo(
    id: number,
    updateData: UpdateTodoDto,
  ): { prev: Todo; current: Todo } {
    let updateTodo: { prev: Todo; current: Todo };

    this.todos = this.todos.map((todoItem) => {
      if (todoItem.id === id) {
        const prevItem = todoItem;
        todoItem = { ...todoItem, ...updateData };

        updateTodo = { prev: prevItem, current: todoItem };
      }

      return todoItem;
    });

    return updateTodo;
  }

  removeTodo(id: number): boolean {
    const todoIdList = this.todos.map((todo) => todo.id);

    if (!todoIdList.includes(id)) return false;

    this.todos = this.todos.filter((todoItem) => todoItem.id !== id);
    return true;
  }
}
