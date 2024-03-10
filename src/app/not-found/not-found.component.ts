import {
  Component,
  Inject,
  Optional,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformServer } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatButton } from '@angular/material/button';

import { Response } from 'express';
import { RESPONSE } from '../../express.tokens';

import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'archiproton-not-found',
  standalone: true,
  imports: [
    SharedModule,
    RouterLink,
    MatButton
  ],
  templateUrl: './not-found.component.html',
  styleUrls: ['../root.component.scss', './not-found.component.scss']
})
export class NotFoundComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(RESPONSE) private response: Response
  ) {
    if (isPlatformServer(this.platformId)) {
      this.response.status(404);
    }
  }
}
