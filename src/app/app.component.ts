import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IndexComponent } from './index/index.component';

@Component({
  selector: 'archiproton-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IndexComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./root.component.scss', './app.component.scss']
})
export class AppComponent { }
