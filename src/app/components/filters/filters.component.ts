import { Component, OnInit } from '@angular/core';
import { EFilters } from 'src/app/constants/filters.enum';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

    public yearsFilters = Array.from(Array(15).keys(), x => (x + 2006).toString());
    public booleanFilters = Array.of('true', 'false');
    public filterTypes = EFilters;

  constructor() { }

  ngOnInit(): void {
  }

}
