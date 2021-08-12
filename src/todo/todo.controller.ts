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

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  addTodo(@Body('data') todoData: CreateTodoDto) {
    console.log('Create todo data: ', todoData);
    return this.todoService.addTodo(todoData);
  }

  // Get todos
  @Get()
  async getTodos() {
    const todos = await this.todoService.getTodos();

    return { data: todos };
  }

  // Update todo
  @Patch(':id')
  updateTodos(
    @Param('id') id: number,
    @Body('data') updateData: UpdateTodoDto,
  ) {
    return this.todoService.updateTodo(id, updateData);
  }

  // Delete todo
  @Delete(':id')
  removeTodo(@Param('id') id: number) {
    return this.todoService.removeTodo(id);
  }
}
