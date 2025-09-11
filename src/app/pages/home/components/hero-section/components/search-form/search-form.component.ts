import { Component } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  searchFormFields = [
    { icon: 'flight-outline.svg', alt: 'Flight', label: 'Plecare', placeholder: 'Selecteaza aeroport', readonly: false, value: '' },
    { icon: 'flight-outline.svg', alt: 'Flight', label: 'Destinatie', placeholder: 'Selecteaza aeroport', readonly: false, value: '' },
    { icon: 'calendar.svg', alt: 'calendar', label: 'Plecare | Intoarcere', placeholder: '', readonly: true, value: '15 ian, 25 - 18 ian, 25' },
    { icon: 'user.svg', alt: 'User', label: 'Pasageri', placeholder: '', readonly: true, value: '02' }
  ];

  getColumnClass(i: number): string {
    if (i === 0 || i === 1) {
      return 'col-lg-3 col-6';
    } else if (i === 2) {
      return 'col-lg-3';
    } else if (i === 3) {
      return 'col-lg-2';
    }
    return '';
  }
}
