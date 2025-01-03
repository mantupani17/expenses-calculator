import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('expenses')
export class Expense {
  @PrimaryGeneratedColumn() // Auto-increment primary key
  id: number

  @Column({type: 'float'})
  amount: number

  @Column({ type: 'timestamp', nullable: true })
  date: Date

  @Column({ default: null })
  towards: string
}
