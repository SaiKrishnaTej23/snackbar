import { Component, OnInit, Input } from '@angular/core';
import { SnackBar } from './snackbar';
import { SnackBusService } from './snackbus.service';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
  message:string;
  class:number = 7;
  constructor(private events: SnackBusService) {
    this.events.listen("Notify").subscribe((x:SnackBar )=> {
    this.message = x.data.message;
    this.class = x.data.class;
    });
   }
   close(){
     this.class = 7;
   }

  ngOnInit() {
  }

}
