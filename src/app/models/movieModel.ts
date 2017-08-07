export class MovieModel {

  adult: boolean;
  backdrop_path: null;
  genre_ids: Array<any>;
  id: number
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  cast: Array<object>;
  crew: Array<object>;

  constructor(id: number) {
    this.id = id
  }

  empty() {
    const cast = {
      cast_id: 0,
      character: '',
      credit_id: '',
      gender: -1,
      id: 0,
      name: '',
      order: 0,
      profile_path: null
    };

    const crew = {
      credit_id: '',
      department: '',
      gender: 0,
      id: 0,
      job: '',
      name: '',
      profile_path: ''
    };

    const movie = {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 0,
      original_language: '',
      original_title: '',
      overview: '',
      popularity: 0,
      poster_path: '',
      release_date: 0,
      title: '',
      video: false,
      vote_average: 0,
      vote_count: 0,
      cast: [cast],
      crew: [crew]
    };

    return movie;
  }

  newMovie(obj: Object) {

    const isObject = obj.hasOwnProperty('id');

    isObject === true ? Object.assign(this, obj) : Object.assign(this, this.empty());
    // this.title = 'not selected';
    return this;
  }
}
