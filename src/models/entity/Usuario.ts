import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("usuario")
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "email", type: "varchar" })
  email: string

  @Column({ name: "password", type: "varchar" })
  password: string
}
