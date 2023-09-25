import { Movie } from "@models/entity/Movies"
import { Request, Response } from "express"
import { getRepository } from "typeorm"

export class MovieControlador {
  async getMovies(req: Request, res: Response) {
    try {
      const moviesRepository = getRepository(Movie)
      const movie = moviesRepository.find()
      return res.status(200).json({ movie })
    } catch (error) {
      return res.status(500).json({ message: "Erro" })
    }
  }
  async getMovieId(req: Request, res: Response) {
    try {
      const moviesRepository = getRepository(Movie)
      const { id } = req.body
      const movie = await moviesRepository.findOne({
        where: { id },
      })
      if (movie) {
        return res.status(200).json({ movie })
      } else {
        return res.status(200).json({ message: "Falha ao encontrar Filme." })
      }
    } catch (error) {
      return res.status(500).json({ message: "ERROR" })
    }
  }

  async postMovie(req: Request, res: Response) {
    try {
      const moviesRepository = getRepository(Movie)
      const {
        title,
        gender,
        classification,
        subtitle,
        image,
        releasedate,
        director,
        writer,
        studio,
        actors,
        resume,
        awards,
        note,
      } = req.body
      if (
        !title ||
        !gender ||
        !classification ||
        !subtitle ||
        !image ||
        !releasedate ||
        !director ||
        !writer ||
        !studio ||
        !actors ||
        !resume ||
        !awards ||
        !note
      ) {
        return res.status(500).json({ message: "Campos obrigatorios" })
      }
      const newMovie = moviesRepository.create({
        title,
        gender,
        classification,
        subtitle,
        image,
        releasedate,
        director,
        writer,
        studio,
        actors,
        resume,
        awards,
        note,
      })

      await moviesRepository.save(newMovie)
      return res.status(200).json({ message: "sucesso", newMovie })
    } catch (error) {
      return res.status(500).json({ message: "falha" })
    }
  }
  async deleteMovie(req: Request, res: Response) {
    try {
      const moviesRepository = getRepository(Movie)
      const { id } = req.body
      const movie = moviesRepository.findOne({ where: { id } })
      moviesRepository.delete(await movie)
      return res.status(200).json({ message: "Filme removido com sucesso" })
    } catch (error) {
      return res.status(500).json({ message: "erro" })
    }
  }
}
