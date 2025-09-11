import { Component } from '@angular/core';

@Component({
  selector: 'app-search-tabs',
  templateUrl: './search-tabs.component.html',
  styleUrls: ['./search-tabs.component.css']
})
export class SearchTabsComponent {
  selectedTabIndex = 0;
  searchTabs = [
    { src: 'flight.svg', label: 'Zboruri', alt: 'Flight' },
    { src: 'hotel.svg', label: 'Hoteluri', alt: 'Hotel' },
    { src: 'location.svg', label: 'Atractii', alt: 'Attractions' },
    { src: 'vacation.svg', label: 'Vacante', alt: 'Vacation' }
  ];

  selectTab(index: number): void {
    this.selectedTabIndex = index;
  }
}
