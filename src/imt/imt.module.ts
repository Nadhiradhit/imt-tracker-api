import { Module } from '@nestjs/common';
import { ImtService } from './imt.service.js';
import { ImtController } from './imt.controller.js';

@Module({
  controllers: [ImtController],
  providers: [ImtService],
})
export class ImtModule {}
