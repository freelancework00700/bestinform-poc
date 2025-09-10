import { Component } from '@angular/core';

@Component({
  selector: 'app-search-tabs',
  templateUrl: './search-tabs.component.html',
  styleUrls: ['./search-tabs.component.css']
})
export class SearchTabsComponent {
  selectedTabIndex = 0;
  searchTabs = [
    { src: 'flight.png', label: 'Zboruri', alt: 'Flight' },
    { src: 'hotel.png', label: 'Hoteluri', alt: 'Hotel' },
    { src: 'location.png', label: 'Atractii', alt: 'Attractions' },
    { src: 'vacation.png', label: 'Vacante', alt: 'Vacation' }
  ];


  selectTab(index: number): void {
    this.selectedTabIndex = index;
  }
}
