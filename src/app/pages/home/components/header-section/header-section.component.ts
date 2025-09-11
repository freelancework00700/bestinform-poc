import { Component } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent {
  badgeImages = [
    { src: 'sub-brand-1.svg', alt: 'sub-brand-1' },
    { src: 'sub-brand-2.svg', alt: 'sub-brand-2' },
    { src: 'sub-brand-3.svg', alt: 'sub-brand-3' }
  ];
}
