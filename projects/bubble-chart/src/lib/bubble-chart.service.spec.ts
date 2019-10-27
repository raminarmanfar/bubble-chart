import { TestBed } from '@angular/core/testing';

import { BubbleChartService } from './bubble-chart.service';

describe('BubbleChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BubbleChartService = TestBed.get(BubbleChartService);
    expect(service).toBeTruthy();
  });
});
