import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { ControllerService } from '../../services/controller-service';
import { weatherResponse } from '../../../resources/test/weatherResponse.json';
import { Observable, of } from 'rxjs';

class MockControllerService {
  getWeather() {
    const obser: Observable<any> = of(weatherResponse);
    return obser;
  }
}

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        {provide: ControllerService, useClass: MockControllerService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(Header);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header nav div div')?.textContent).toContain('bike-triage-ng');
  });

  it('should use the controller service', () => {
    expect(component.weather()).toBe(18.73);
  });
});
