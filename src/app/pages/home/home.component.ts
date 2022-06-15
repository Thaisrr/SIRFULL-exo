import {Component, OnInit} from '@angular/core';
import {Film} from "../../utils/models/Film";
import {MovieService} from "../../utils/services/movie.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  filter : 'ALL' | boolean = 'ALL';
  movieToUpdate?: Film;

  movies: Film[] = [];
  showForm = false;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieToUpdate = undefined;
    this.movieService.getAll()
      .subscribe(movies => this.movies = movies);
  }


  changeFilter(newFilter : 'ALL' | boolean) {
    this.showForm = false;
    this.filter = newFilter;
  }

  setUpdatedMovie(m: Film) {
    this.movieToUpdate = m;
  }

}
