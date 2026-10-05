"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const existingUser = await this.prisma.user.findFirst({
            where: {
                OR: [{ document: dto.document }, { email: dto.email }],
            },
        });
        if (existingUser) {
            throw new common_1.ConflictException('CPF/CNPJ ou e-mail já cadastrado no sistema');
        }
        return this.prisma.user.create({
            data: {
                fullName: dto.fullName,
                document: dto.document,
                email: dto.email,
                password: dto.password,
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
    async findById(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], UsersService);
//# sourceMappingURL=users.service.js.map