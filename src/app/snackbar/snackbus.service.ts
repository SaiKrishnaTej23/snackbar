import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { SnackBar } from './snackbar';
export class SnackBusService
{
    bus:Subject<SnackBar> = new Subject<SnackBar>();

    dispatch(snack:SnackBar){
        this.bus.next(snack)
    }
    
    listen(type:string):Observable<SnackBar> {
        return this.bus.filter(event=>event.event.type === type);
    }
}