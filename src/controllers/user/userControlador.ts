import { Usuario } from "@models/entity/Usuario"
import { Request, Response } from "express"
import { getRepository } from "typeorm"

export class UsuarioControlador {
  async getUsuario(req: Request, res: Response) {
    try {
      const UsuarioRepository = getRepository(Usuario)
      const { email, password } = req.body
      const usuario = await UsuarioRepository.findOne({
        where: { email, password },
      })

      if (usuario) {
        return res.status(200).json({ auth: "true", message: "sucesso" })
      } else {
        return res.status(200).json({ auth: "false", message: "falha" })
      }
    } catch (error) {
      return res.status(500).json({ message: "Erro" })
    }
  }
}
