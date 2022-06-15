import { Pipe, PipeTransform } from '@angular/core';
import {Film} from "../models/Film";

@Pipe({
  name: 'movieFilter',
  pure: true
})
export class MovieFilterPipe implements PipeTransform {

  transform(value: Film[], filter: 'ALL' | boolean): Film[] {
    if(filter === 'ALL') return value;
    return value.filter(movie => movie.vue === filter);
  }

}
