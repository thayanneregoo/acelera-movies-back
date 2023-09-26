import { Movie } from "@models/entity/Movies"
import { Request, Response, request, response } from "express"
import { getRepository } from "typeorm"

export class MovieControlador {
  async getMovies(req: Request, res: Response) {
    try {
      const moviesRepository = getRepository(Movie)
      const movie = await moviesRepository.find()
      return res.status(200).json({ movie })
    } catch (error) {
      return res.status(500).json({ message: "Erro" })
    }
  }
  async getMovieId(req: Request, res: Response) {
    try {
      const moviesRepository = getRepository(Movie)
      const { id } = req.params
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
      const { id } = req.params
      const movie = await moviesRepository.findOne({ where: { id } })
      moviesRepository.delete(movie)
      if (movie) {
        return res.status(200).json({ message: "Filme removido com sucesso" })
      } else {
        return res.status(200).json({ message: "Falha ao encontrar Filme." })
      }
    } catch (error) {
      return res.status(500).json({ message: "erro" })
    }
  }

  async changeMovie(req: Request, res: Response) {
    const { id } = req.params
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
    try {
      const moviesRepository = getRepository(Movie)
      const movie = await moviesRepository.findOne(id)

      movie.title = title
      movie.gender = gender
      movie.classification = classification
      movie.subtitle = subtitle
      movie.image = image
      movie.releasedate = releasedate
      movie.director = director
      movie.writer = writer
      movie.studio = studio
      movie.actors = actors
      movie.resume = resume
      movie.awards = awards
      movie.note = note
      console.log(movie)
      await moviesRepository.save(movie)
      return res.status(200).json({ message: "Sucesso" })
    } catch (erro) {
      console.log(erro)
      return res.status(500).json({ message: "Erro change " })
    }
  }
}
