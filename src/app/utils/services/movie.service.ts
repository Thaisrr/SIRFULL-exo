import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EMPTY, Observable, of} from "rxjs";
import {Film} from "../models/Film";
import {ToastService} from "./toast.service";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  api = 'http://localhost:3200/films';

  constructor(private http: HttpClient, private toaster: ToastService) { }

  create(film: Film): Observable<Film> {
    return this.http.post<Film>(this.api, film)
      .pipe(
        tap(film => this.toaster.createToast(`${film.title} créé avec succès`, 'success')),
        catchError(err => {
          this.toaster.createToast(`Oups, Quelque chose s'est passé`, "error");
          return EMPTY
        })
      );
  }

  getAll(): Observable<Film[]> {
    return this.http.get<Film[]>(this.api).pipe(
      catchError(err => {
        this.toaster.createToast(`Impossible de charger les films`, "error");
        return EMPTY
      })
    );
  }

  getById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.api}/${id}`)
      .pipe(
        catchError(err => {
          this.toaster.createToast(`Impossible de charger le film`, "error");
          return EMPTY
        })
      );
  }

  update(film: Film): Observable<Film> {
    return this.http.put<Film>(`${this.api}/${film?.id}`, film).pipe(
      tap(film => this.toaster.createToast('Film modifié avec succès', 'success')),
      catchError(err => {
        this.toaster.createToast(`Impossible de modifier le films`, 'error');
        return EMPTY
      })
    )
  }

  delete(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.api}/${id}`).pipe(
      tap(film => this.toaster.createToast('Film supprimé avec succès', 'success')),
      catchError(err => {
        this.toaster.createToast(`Impossible de supprimer le films`, 'error');
        return EMPTY
      })
    )
  }
}
