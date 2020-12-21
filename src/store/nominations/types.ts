import { Movie } from '../movies/types'

interface Nominations extends Movie {
  _id: string
  __v?: number
}

export interface FinalNominations {
  loading: boolean
  error: string
  nominations: Nominations[]
}
