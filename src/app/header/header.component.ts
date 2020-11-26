import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../service/auth-service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(public dialog: MatDialog, private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    openDialogSignIn(): void {
        this.authService.openDialog();
    }

}
