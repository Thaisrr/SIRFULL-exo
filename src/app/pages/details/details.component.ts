import { Component, OnInit } from '@angular/core';
import {Film} from "../../utils/models/Film";
import {MovieService} from "../../utils/services/movie.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movie?: Film;
  route_sub?: Subscription;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    this.route_sub = this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.movieService.getById(id)),
      tap(film => this.movie = film)
    ).subscribe()
  }

}
