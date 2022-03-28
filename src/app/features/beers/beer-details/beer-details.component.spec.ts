import { ElementSchemaRegistry } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BeerDTO } from 'src/app/core/api/beer-dto.interface';
import { BeerService } from '../beer.service';

import { BeerDetailsComponent } from './beer-details.component';

const getRootElement = (fixture: ComponentFixture<any>): HTMLElement => {
  return fixture.elementRef.nativeElement;
}

const getChildElementByClass = (element: HTMLElement, cssClass: string): HTMLElement | null => {
  return element.querySelector(cssClass);
}

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;
  let activatedRouteStub: ActivatedRoute;
  let beerServiceStub: BeerService;

  beforeEach(async () => {
    beerServiceStub = {
      getBeerById: (arg1) => of({})
    } as BeerService;
    activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: (arg1) => ''
        }
      }
    } as ActivatedRoute;
    await TestBed.configureTestingModule({
      declarations: [ BeerDetailsComponent ],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('beer info', () => {
    let beerServiceInstance: BeerService;
    let beerNameMock: string;
    let beerDescriptionMock: string;
    let rootElement: HTMLElement;
    beforeEach(() => {
      beerNameMock = 'Test beer 1';
      beerDescriptionMock = 'Test beer description',
      beerServiceInstance = TestBed.inject(BeerService);
      spyOn(beerServiceInstance, 'getBeerById').and.returnValue(of({
        name: beerNameMock,
        description: beerDescriptionMock
      } as BeerDTO))
      rootElement = getRootElement(fixture);
      fixture.detectChanges();
    });

    describe('name', () => {
      it('is "Test beer 1"', () => {
        const beerNameElement = getChildElementByClass(rootElement, '.beer-name');
        
        expect(beerNameElement?.textContent).toEqual(beerNameMock);
      });
    })
  
    describe('description', () => {
      it('is "Test beer description"', () => {
        const beerDescriptionElement = getChildElementByClass(rootElement, '.beer-description');
        
        expect(beerDescriptionElement?.textContent).toEqual(beerDescriptionMock);
      });
    })
  })
});
