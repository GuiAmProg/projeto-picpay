import { PartialType } from '@nestjs/mapped-types';
import { CreateTranferDto } from './create-tranfer.dto';

export class UpdateTranferDto extends PartialType(CreateTranferDto) {}
