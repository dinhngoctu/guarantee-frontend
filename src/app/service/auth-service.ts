import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignInComponent} from '../Auth/sign-in/sign-in.component';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(public dialog: MatDialog) {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(SignInComponent, {
                width: 'auto',
                // data: post,
                height: 'auto',
                // state: post
            }
        );

        dialogRef.afterClosed().subscribe(result => {
        });

        const dialogSubmitSubscription =
            dialogRef.componentInstance.submitClicked.subscribe(() => {
                dialogSubmitSubscription.unsubscribe();
            });

    }

}
