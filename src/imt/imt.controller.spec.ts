import { Test, TestingModule } from '@nestjs/testing';
import { ImtController } from './imt.controller.js';
import { ImtService } from './imt.service.js';

describe('ImtController', () => {
  let controller: ImtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImtController],
      providers: [ImtService],
    }).compile();

    controller = module.get<ImtController>(ImtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
