import { getTODO, itsWorks } from "@controllers/todo"
import { MovieController } from "@controllers/movie/movieControllers"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", new MovieController().getMovies)
}
