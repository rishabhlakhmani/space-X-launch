import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { filterTypes } from 'src/app/constants/filters.constant';
import { IFilters } from 'src/app/models/filters.interface';
import { MissionsService } from 'src/app/services/missions.service';

@Component({
    selector: 'app-filter-category',
    templateUrl: './filter-category.component.html',
    styleUrls: ['./filter-category.component.scss']
})
export class FilterCategoryComponent implements OnInit {
    @Input() filterType: string;
    public filterCategory: { label: string, values: string[] };
    public activeFilters: IFilters;
    constructor(private missionService: MissionsService, private router: Router) { }

    ngOnInit(): void {
        this.filterCategory = filterTypes.get(this.filterType);
        this.missionService.getFiltersObs().subscribe((filters: IFilters) => {
            this.activeFilters = filters;
        });
    }

    public onClick(filterValue: string): void {
        if (filterValue !== 'Clear') {
            const newFilters = { ...this.activeFilters, [this.filterType]: filterValue };
            this.router.navigate(['/launches'], { queryParams: newFilters });
        } else {
            this.router.navigate(['/launches']);
        }
    }

}
