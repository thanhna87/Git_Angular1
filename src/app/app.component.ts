import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoPropertyBindingComponent } from './demo-property-binding/demo-property-binding.component';
import { DemoClassBindingComponent } from './demo-class-binding/demo-class-binding.component';
import { DemoStyleBindlingComponent } from './demo-style-bindling/demo-style-bindling.component';
import { DemoEventBindingComponent } from './demo-event-binding/demo-event-binding.component';
import { PipeReversePipe } from "./pipe-reverse.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,
        RouterOutlet,
        DemoPropertyBindingComponent,
        DemoClassBindingComponent,
        DemoStyleBindlingComponent,
        DemoEventBindingComponent, PipeReversePipe]
})
export class AppComponent {
  title = 'practice';
}
