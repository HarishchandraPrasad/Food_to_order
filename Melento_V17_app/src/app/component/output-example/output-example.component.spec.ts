import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputExampleComponent } from './output-example.component';

describe('OutputExampleComponent', () => {
  let component: OutputExampleComponent;
  let fixture: ComponentFixture<OutputExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputExampleComponent]
    });
    fixture = TestBed.createComponent(OutputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
