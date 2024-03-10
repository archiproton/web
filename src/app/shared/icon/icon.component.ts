import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MatIconRegistry } from '@angular/material/icon';

import { environment } from '../../../environments/environment';


@Component({
  selector: 'archiproton-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent implements OnInit {
  @Input({ required: true }) iconKey!: keyof typeof environment.ICON_PATHS;

  constructor(private iconRegistery: MatIconRegistry, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.iconRegistery.addSvgIcon(
      this.iconKey,
      this.sanitizer.bypassSecurityTrustResourceUrl(environment["ICON_PATHS"][this.iconKey])
    );
  }
}
