import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TranferService } from './tranfer.service';
import { CreateTranferDto } from './dto/create-tranfer.dto';
import { UpdateTranferDto } from './dto/update-tranfer.dto';

@Controller('tranfer')
export class TranferController {
  constructor(private readonly tranferService: TranferService) {}

  @Post()
  create(@Body() createTranferDto: CreateTranferDto) {
    return this.tranferService.create(createTranferDto);
  }

  @Get()
  findAll() {
    return this.tranferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tranferService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTranferDto: UpdateTranferDto) {
    return this.tranferService.update(+id, updateTranferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tranferService.remove(+id);
  }
}
