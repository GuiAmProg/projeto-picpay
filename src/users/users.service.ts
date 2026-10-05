import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    // 1. Verifica se já existe um usuário com o mesmo CPF/CNPJ ou Email
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ document: dto.document }, { email: dto.email }],
      },
    });

    if (existingUser) {
      throw new ConflictException('CPF/CNPJ ou e-mail já cadastrado no sistema');
    }

    // 2. Cria o usuário no banco via Prisma
    return this.prisma.user.create({
      data: {
        fullName: dto.fullName,
        document: dto.document,
        email: dto.email,
        password: dto.password, // Em produção, lembre-se de aplicar hash com bcrypt!
        balance: dto.balance ?? 0,
        type: dto.type,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        fullName: true,
        email: true,
        document: true,
        balance: true,
        type: true,
        createdAt: true,
      },
    });
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }
}