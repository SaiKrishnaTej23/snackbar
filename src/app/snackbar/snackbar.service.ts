import { Injectable } from '@angular/core';
import { SnackBusService } from './snackbus.service';
import { SnackBar } from './snackbar'
@Injectable()
export class SnackbarService {

    constructor(private eventbus:SnackBusService) { }
    Notify(option:any){
        var snack:SnackBar = new SnackBar();
        snack.data = option;
        snack.event = new Event("Notify");
        this.eventbus.dispatch(snack);
    }
}