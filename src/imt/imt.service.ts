import { Injectable } from '@nestjs/common';
import { CreateImtDto } from './dto/create-imt.dto.js';
import { UpdateImtDto } from './dto/update-imt.dto.js';

@Injectable()
export class ImtService {
  

  async createImt(createImtDto: CreateImtDto) {
    const calculateImt = createImtDto.weight / (createImtDto.height * createImtDto.height);
    

    const statusImt = (imt: number) => {
      if (imt < 18.5) {
        return 'Underweight';
      } else if (imt >= 18.5 && imt < 25) {
        return 'Normal weight';
      } else if (imt >= 25 && imt < 30) {
        return 'Overweight';
      } else {
        return 'Obesity';
      } 

    }

    const imt = {
      value: calculateImt.toFixed(2),
      status: statusImt(calculateImt),
    }

    return {
      message: 'IMT calculated successfully',
      data: {
        imt,
      }
    }
  }
}
