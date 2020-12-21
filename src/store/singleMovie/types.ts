import { Movie } from '../movies/types'

interface Rating {
  Source: string
  Value: string
}

export interface SingleMovie extends Movie {
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
}
