import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReversePipe } from './demo-pipe-custom/reverse.pipe';

@NgModule({
    declarations: [
        ReversePipe
    ],
    imports: [
        BrowserModule,
        AppComponent
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }