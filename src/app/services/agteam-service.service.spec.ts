import { TestBed } from '@angular/core/testing';

import { AgteamServiceService } from './agteam-service.service';

describe('AgteamServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgteamServiceService = TestBed.get(AgteamServiceService);
    expect(service).toBeTruthy();
  });
});
