import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/createTodo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';
import { TodoService } from './todo.service';

import { Todo } from './entities/todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  addTodo(@Body('data') todoData: CreateTodoDto) {
    return this.todoService.addTodo(todoData);
  }

  // Get todos
  @Get()
  getTodos(): Todo[] {
    return this.todoService.getTodos();
  }

  // Update todo
  @Patch(':id')
  updateTodos(
    @Param('id') id: string,
    @Body('data') updateData: UpdateTodoDto,
  ) {
    return this.todoService.updateTodo(id, updateData);
  }

  // Delete todo
  @Delete(':id')
  removeTodo(@Param('id') id: string) {
    return this.todoService.removeTodo(id);
  }
}
