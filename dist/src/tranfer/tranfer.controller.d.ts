import { TranferService } from './tranfer.service';
import { CreateTranferDto } from './dto/create-tranfer.dto';
import { UpdateTranferDto } from './dto/update-tranfer.dto';
export declare class TranferController {
    private readonly tranferService;
    constructor(tranferService: TranferService);
    create(createTranferDto: CreateTranferDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTranferDto: UpdateTranferDto): string;
    remove(id: string): string;
}
