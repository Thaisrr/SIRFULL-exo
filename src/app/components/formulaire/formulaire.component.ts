import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Film} from "../../utils/models/Film";
import {MovieService} from "../../utils/services/movie.service";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit, OnChanges {


  @Output() updateEvent = new EventEmitter();
  @Input('updated_movie') movie?: Film;
  id?: number;

  filmForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    vue: new FormControl(false)
  });

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if(this.movie) {
      this.id = this.movie.id;
      delete this.movie.id;
      this.filmForm.setValue(this.movie);
    }
  }

  handleSubmit() {
    if(this.filmForm.valid) {
      const film: Film = this.filmForm.value as Film;
      film.id = this.id;
      if(this.movie) {
        this.movieService.update(film).subscribe(() => this.updateEvent.emit());
      } else {
        this.movieService.create(film).subscribe(() => this.updateEvent.emit());
      }
      this.filmForm.reset();
    }
  }
}
