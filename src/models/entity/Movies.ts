import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { ColumnNumericOptions } from "typeorm/decorator/options/ColumnNumericOptions"

@Entity("movies")
export class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar" })
  title: string

  @Column({ name: "releaseDate", type: "timestamp" })
  releaseDate: Date

  @Column({ name: "resume", type: "text" })
  resume: string

  @Column({ name: "note", type: "int" })
  note: number
}
