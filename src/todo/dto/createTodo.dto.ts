import { User } from 'src/user/entities/user.entity';

export class CreateTodoDto {
  id: number;
  task: string;
  isDone: boolean;
  description?: string;
  user: User;
}
