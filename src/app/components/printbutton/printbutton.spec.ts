import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Printbutton } from './printbutton';

describe('Printbutton', () => {
  let component: Printbutton;
  let fixture: ComponentFixture<Printbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Printbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Printbutton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
