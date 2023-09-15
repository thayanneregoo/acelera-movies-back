import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ToDo {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar" })
  title: String
}
