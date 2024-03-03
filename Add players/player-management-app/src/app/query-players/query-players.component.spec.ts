import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPlayersComponent } from './query-players.component';

describe('QueryPlayersComponent', () => {
  let component: QueryPlayersComponent;
  let fixture: ComponentFixture<QueryPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryPlayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
