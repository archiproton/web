import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { EnvironmentPipe } from './pipes/environment/environment.pipe';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconComponent } from './icon/icon.component';


@NgModule({
  declarations: [
    EnvironmentPipe,
    HeaderComponent,
    FooterComponent,
    IconComponent
  ],
  imports: [
    RouterLink,
    MatToolbarModule,
    MatButton,
    MatIconModule
  ],
  exports: [
    EnvironmentPipe,
    HeaderComponent,
    FooterComponent,
    IconComponent
  ]
})
export class SharedModule { }
