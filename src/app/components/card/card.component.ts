import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from "../../utils/models/Film";
import {MovieService} from "../../utils/services/movie.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() movie! : Film;

  @Output() reload = new EventEmitter();
  @Output() modifyEvent = new EventEmitter();

  constructor(private movieService: MovieService) {}


  changeStatus() {
    this.movie.vue = !this.movie.vue;
    this.movieService.update(this.movie).subscribe(() => this.reload.emit())

  }

  deleteMovie() {
    if(this.movie.id)
      this.movieService.delete(this.movie.id)
        .subscribe(()=> this.reload.emit());
  }

  modifyMovie() {
    this.modifyEvent.emit();
  }
}
