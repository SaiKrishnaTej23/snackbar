import { Component, OnInit } from '@angular/core';
import { SnackbarService } from './snackbar/snackbar.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  messages = "Hi There !";
  constructor(private snack:SnackbarService){
    
  }
  clicked(){
    console.log("Hi there");
    this.snack.Notify({message:"Hi there!", class:2});
  }
  ngOnInit(){
    this.snack.Notify({message:"constructor!", class:4});

  }
}
