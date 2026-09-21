import { Injectable } from '@nestjs/common';
import { CreateTranferDto } from './dto/create-tranfer.dto';
import { UpdateTranferDto } from './dto/update-tranfer.dto';

@Injectable()
export class TranferService {
  create(createTranferDto: CreateTranferDto) {
    return 'This action adds a new tranfer';
  }

  findAll() {
    return `This action returns all tranfer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tranfer`;
  }

  update(id: number, updateTranferDto: UpdateTranferDto) {
    return `This action updates a #${id} tranfer`;
  }

  remove(id: number) {
    return `This action removes a #${id} tranfer`;
  }
}
