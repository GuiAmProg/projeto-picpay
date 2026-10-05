import { 
  IsEmail, 
  IsEnum, 
  IsNotEmpty, 
  IsNumber, 
  IsOptional, 
  IsString, 
  Min 
} from 'class-validator';
import { UserType } from '../../../generated/prisma';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome completo é obrigatório' })
  fullName!: string;

  @IsString()
  @IsNotEmpty({ message: 'CPF/CNPJ é obrigatório' })
  document!: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  password!: string;

  @IsNumber({}, { message: 'O saldo deve ser um valor numérico' })
  @Min(0, { message: 'O saldo inicial não pode ser negativo' })
  @IsOptional()
  balance?: number;

  @IsEnum(UserType, { message: 'O tipo deve ser COMMON ou MERCHANT' })
  @IsNotEmpty({ message: 'O tipo de usuário é obrigatório' })
  type!: UserType;
}