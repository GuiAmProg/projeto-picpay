import { CreateTranferDto } from './dto/create-tranfer.dto';
import { UpdateTranferDto } from './dto/update-tranfer.dto';
export declare class TranferService {
    create(createTranferDto: CreateTranferDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTranferDto: UpdateTranferDto): string;
    remove(id: number): string;
}
