import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsontoexcelComponent } from './jsontoexcel.component';

describe('JsontoexcelComponent', () => {
  let component: JsontoexcelComponent;
  let fixture: ComponentFixture<JsontoexcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsontoexcelComponent]
    });
    fixture = TestBed.createComponent(JsontoexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
