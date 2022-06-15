import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "../models/Film";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  api = 'http://localhost:3200/films';

  constructor(private http: HttpClient) { }

  create(film: Film): Observable<Film> {
    return this.http.post<Film>(this.api, film);
  }

  getAll(): Observable<Film[]> {
    return this.http.get<Film[]>(this.api);
  }

  getById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.api}/${id}`);
  }

  update(film: Film): Observable<Film> {
    return this.http.put<Film>(`${this.api}/${film?.id}`, film)
  }

  delete(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.api}/${id}`)
  }
}
