import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

enum Priority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;

  @Column()
  isDone: boolean;

  @Column('enum', { enum: Priority, default: Priority.MEDIUM })
  priority;

  @Column({ default: null })
  description?: string | null;

  @ManyToOne(() => User, (user) => user.todos, {
    onDelete: 'CASCADE',
  })
  user: User;
}
