export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface MovieState {
  searchString: string
  loading: boolean
  movies: Movie[]
}
