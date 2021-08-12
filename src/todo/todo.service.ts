import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/createTodo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';

import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  /** Adds a todo item and returns the added item */
  addTodo(todoItem: CreateTodoDto) {
    const todoEntry = this.todoRepository.create(todoItem);

    return this.todoRepository.save(todoEntry);
  }

  getTodos(filter: Record<string, unknown> | null = null) {
    return this.todoRepository.find({
      relations: ['user'],

      where: filter,
    });
  }

  updateTodo(id: number, updateData: UpdateTodoDto) {
    return this.todoRepository.update(id, updateData);
  }

  removeTodo(id: number) {
    return this.todoRepository.delete(id);
  }
}
