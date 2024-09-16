import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BpmnModelerComponent } from './bpmn-modeler/bpmn-modeler.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BpmnModelerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bpmn';
}
