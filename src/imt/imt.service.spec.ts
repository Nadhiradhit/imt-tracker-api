import { Test, TestingModule } from '@nestjs/testing';
import { ImtService } from './imt.service.js';

describe('ImtService', () => {
  let service: ImtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImtService],
    }).compile();

    service = module.get<ImtService>(ImtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
