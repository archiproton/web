import {
  Component,
  Inject,
  PLATFORM_ID,
  TransferState,
  makeStateKey
} from '@angular/core';

import { isPlatformServer, isPlatformBrowser } from '@angular/common';

const YEAR_STATE_KEY = makeStateKey<number>('year');

@Component({
  selector: 'archiproton-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year!: number;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private transferState: TransferState
  ) {
    if (isPlatformServer(this.platformId)) {
      let year = this.getCurrentYear();

      this.year = year;

      this.transferState.set(YEAR_STATE_KEY, year)
    }

    if (isPlatformBrowser(this.platformId)) {
      this.year = this.transferState.get(YEAR_STATE_KEY, this.getCurrentYear());
    }
  }

  getCurrentYear(): number {
    return (new Date()).getFullYear();
  }
}

