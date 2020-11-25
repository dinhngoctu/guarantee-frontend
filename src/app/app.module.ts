import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SignUpComponent} from './Auth/sign-up/sign-up.component';
import {RouterModule} from '@angular/router';
import {SignInComponent} from './Auth/sign-in/sign-in.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SignUpComponent,
        SignInComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([
            {path: 'sign-up', component: SignUpComponent},
            {path: 'sign-in', component: SignInComponent},
        ]),
        BrowserAnimationsModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
