import { getTODO, itsWorks } from "@controllers/todo"
import { MovieControlador } from "@controllers/movie/movieControlador"
import { UsuarioControlador } from "@controllers/user/userControlador"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", new MovieControlador().getMovies)
  app.get("/login", new UsuarioControlador().getUsuario)
}
