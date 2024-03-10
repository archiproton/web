import { Component } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'archiproton-index',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './index.component.html',
  styleUrls: ['../root.component.scss', './index.component.scss']
})
export class IndexComponent { }
