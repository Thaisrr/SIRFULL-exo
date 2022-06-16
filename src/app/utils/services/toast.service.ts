import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  message?: string;
  level!: 'info' | 'success' | 'error';
  time!: number;
  show: boolean = false;

  constructor() { }

  createToast(message: string, level: 'info' | 'success' | 'error' = 'info', time: number = 5000) {
    this.message = message;
    this.show = true;
    this.level = level;
    this.time = time;
    this.reinit();
  }

  reinit() {
    setTimeout(() => {
      this.show = false;
    }, this.time )
  }


}
