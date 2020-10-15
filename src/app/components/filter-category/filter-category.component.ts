import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MissionsService } from 'src/app/services/missions.service';

@Component({
    selector: 'app-filter-category',
    templateUrl: './filter-category.component.html',
    styleUrls: ['./filter-category.component.scss']
})
export class FilterCategoryComponent implements OnInit {
    @Input() filterType: string;
    @Input() filterValues: string[];

    constructor(private missionService: MissionsService, private router: Router) { }

    ngOnInit(): void {
    }

    public onClick(filterValue: string): void {
        const newFilters =  {...this.missionService.getFilters(), [this.filterType]: filterValue};
        this.missionService.setFilters(newFilters);
        this.router.navigate(['/launches'], { queryParams: newFilters});
    }

}
