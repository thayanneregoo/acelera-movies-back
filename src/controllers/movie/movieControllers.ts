import { Movie } from "@models/entity/Movies"
import { Request, Response } from "express"
import { getRepository } from "typeorm"

export class MovieController {
  async getMovies(req: Request, res: Response) {
    try {
      const moviesRepository = getRepository(Movie)
      const movie = moviesRepository.find()
      return res.status(200).json({ movie })
    } catch (error) {
      return res.status(500).json({ message: "Erro" })
    }
  }
}
