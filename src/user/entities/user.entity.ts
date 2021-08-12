import { Todo } from 'src/todo/entities/todo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column({ length: 20, nullable: false })
  phone: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
