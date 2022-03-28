import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from 'src/app/core/api/api.service';
import { BeerDTO } from 'src/app/core/api/beer-dto.interface';
import { BeerEditComponent } from './beer-edit/beer-edit.component';
import { BeerService } from './beer.service';

import { BeersComponent } from './beers.component';

describe('BeersComponent', () => {
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;
  let beerServiceStub: BeerService;
  let apiServiceStub: ApiService;

  beforeEach(async () => {
    apiServiceStub = {
      getBeers: () => of([] as BeerDTO[])
    } as ApiService;
    beerServiceStub = {
    } as BeerService;
    await TestBed.configureTestingModule({
      declarations: [ BeersComponent, BeerEditComponent ],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: BeerService,
          useValue: beerServiceStub
        },
        {
          provide: ApiService,
          useValue: apiServiceStub
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
