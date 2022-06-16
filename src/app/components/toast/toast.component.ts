import {Component, Input, OnInit} from '@angular/core';
import {ToastService} from "../../utils/services/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {


  constructor(public toaster : ToastService) { }

  ngOnInit(): void {
  }

}
