import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
