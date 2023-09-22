import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { ColumnNumericOptions } from "typeorm/decorator/options/ColumnNumericOptions"

@Entity("movies")
export class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar" })
  title: string

  //   "gender":"string",
  // "classification":"string",
  // "subtitle":"string",
  // "image":"string",

  @Column({ name: "releaseDate", type: "timestamp" })
  releaseDate: Date

  // "director":"string",
  //"writer":"string",
  //"studio":"string",
  //"actors":"string",

  @Column({ name: "resume", type: "text" })
  resume: string

  "awards": "string"

  @Column({ name: "note", type: "int" })
  note: number
}
