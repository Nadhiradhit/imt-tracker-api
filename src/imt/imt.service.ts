import { Injectable } from '@nestjs/common';
import { CreateImtDto } from './dto/create-imt.dto.js';
import { UpdateImtDto } from './dto/update-imt.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ImtService {
  constructor(private readonly prisma: PrismaService) {}
  

  async createImt(createImtDto: CreateImtDto, userId: string) {
    
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

    const calculateImtFixed = calculateImt.toFixed(2);

    const imt = await this.prisma.bMI.create( {
    data: {
        height: createImtDto.height,
        weight: createImtDto.weight,
        bmi: parseFloat(calculateImtFixed),
        status: statusImt(parseFloat(calculateImtFixed)),
        userId: userId,
      }
    })

    return {
      message: 'IMT calculated successfully',
      imt: {
        id: imt.id,
        userId: imt.userId, 
        height: imt.height,
        weight: imt.weight,
        bmi: imt.bmi,
        status: imt.status
      }
    }
  }

  async getImtById(id: string){
    const findImtIdUser = await this.prisma.user.findUnique({
      where: { id }
    })

    const imt = await this.prisma.bMI.findMany({
      where: { userId: findImtIdUser?.id }
    })

    return {
      message: 'IMT records retrieved successfully',
      imt: imt.map(record => ({
        id: record.id,
        userId: record.userId,
        height: record.height,
        weight: record.weight,
        bmi: record.bmi,
        status: record.status,
      }))
    }
  }

  async updateImt(id: string, updateImtDto: UpdateImtDto){

    const calculateImt = updateImtDto.weight / (updateImtDto.height * updateImtDto.height);

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

    const calculateImtFixed = calculateImt.toFixed(2);

    const updatedImt = await this.prisma.bMI.update({
      where: { id },
      data: {
        height: updateImtDto.height,
        weight: updateImtDto.weight,
        bmi: parseFloat(calculateImtFixed),
        status: statusImt(parseFloat(calculateImtFixed)),
      }
    });

    return {
      message: 'IMT record updated successfully',
      imt: {
        id: updatedImt.id,
        userId: updatedImt.userId,
        height: updatedImt.height,
        weight: updatedImt.weight,
        bmi: updatedImt.bmi,
        status: updatedImt.status
      }
    }
  }

  async deleteImt(id: string){
    const deletedImt = await this.prisma.bMI.delete({
      where: { id },
    });

    return {
      message: 'IMT record deleted successfully',
      imt: {
        id: deletedImt.id,
      }
    }
  }
}
