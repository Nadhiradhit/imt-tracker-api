import { Injectable } from '@nestjs/common';
import { CreateImtDto } from './dto/create-imt.dto.js';
import { UpdateImtDto } from './dto/update-imt.dto.js';

@Injectable()
export class ImtService {
  create(createImtDto: CreateImtDto) {
    return 'This action adds a new imt';
  }

  findAll() {
    return `This action returns all imt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imt`;
  }

  update(id: number, updateImtDto: UpdateImtDto) {
    return `This action updates a #${id} imt`;
  }

  remove(id: number) {
    return `This action removes a #${id} imt`;
  }
}
