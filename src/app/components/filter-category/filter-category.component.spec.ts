import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { FilterCategoryComponent } from './filter-category.component';

describe('FilterCategoryComponent', () => {
    let component: FilterCategoryComponent;
    let fixture: ComponentFixture<FilterCategoryComponent>;
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [FilterCategoryComponent],
            providers: [{ provide: Router, useValue: routerSpy }]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FilterCategoryComponent);
        component = fixture.componentInstance;
        component.filterType = 'launch_success';
        component.ngOnInit();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate to filtered url and the clear', () => {
        component.onClick('true');
        let path = routerSpy.navigate.calls.first().args[0];
        const queryParams = routerSpy.navigate.calls.first().args[1]?.queryParams;
        expect(path).toEqual(['/launches']);
        expect(queryParams).toEqual({ launch_success: 'true' });

        component.onClick('Clear');
        path = routerSpy.navigate.calls.first().args[0];
        expect(path).toEqual(['/launches']);
    });
});
