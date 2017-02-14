import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SnackbarComponent }   from './snackbar.component';
import { SnackbarService } from './snackbar.service';
import { SnackBusService } from './snackbus.service';

@NgModule({
    imports: [CommonModule],
    exports: [SnackbarComponent],
    declarations: [SnackbarComponent],
    providers: [SnackbarService, SnackBusService],
})
export class SnackbarModule { }
