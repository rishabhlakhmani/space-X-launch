import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filterTypes } from 'src/app/constants/filters.constant';
import { MissionsService } from 'src/app/services/missions.service';

@Component({
    selector: 'app-filter-category',
    templateUrl: './filter-category.component.html',
    styleUrls: ['./filter-category.component.scss']
})
export class FilterCategoryComponent implements OnInit {
    @Input() filterType: string;
    public filterCategory: {label: string, values: string[]};
    constructor(private missionService: MissionsService, private router: Router) { }

    ngOnInit(): void {
        this.filterCategory = filterTypes.get(this.filterType);
    }

    public onClick(filterValue: string): void {
        if (filterValue !== 'Clear') {
            const newFilters =  {...this.missionService.getFilters(), [this.filterType]: filterValue};
            this.router.navigate(['/launches'], { queryParams: newFilters});
        } else {
            this.router.navigate(['/launches']);
        }
    }

}
