import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Piano } from './app.piano'
import { Osc } from './app.osc'


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: '',
                component: Piano,
                pathMatch: 'full'
            },
            {
                path: 'piano',
                component: Piano
            },
            {
                path: 'osc',
                component: Osc
            }
        ])
    ],
    declarations: [AppComponent, Piano, Osc],
    bootstrap: [AppComponent]
})
export class AppModule { }
