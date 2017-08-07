import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class SearchService {
  key = '8670e251a142060248918513c31bfb34';
  movieUrl= `https://api.themoviedb.org/3`;
  constructor(private http: Http) {}


    getMovies(title) {
      return this.http.get(`${this.movieUrl}/search/movie?api_key=${this.key}&query=${title}`)
      .map((response) => {
      console.info(response.json());
        return response.json();
      })
    }


    getMovieById(id){
      //movie/${id}/credits?api_key=<<api_key>>
       return this.http.get(`${this.movieUrl}/movie/${id}?api_key=${this.key}`)
       .map(response => response.json())
    }

    getMovieCradit(id){
       return this.http.get(`${this.movieUrl}/movie/${id}/credits?api_key=${this.key}`)
       .map(response => response.json())
    }

    getGenre(){
      return this.http.get(`${this.movieUrl}/genre/movie/list?api_key=${this.key}`)
        .map(response => response.json())
        }
}
