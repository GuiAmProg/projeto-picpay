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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class CreateUserDto {
    fullName;
    document;
    email;
    password;
    balance;
    type;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome completo é obrigatório' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'CPF/CNPJ é obrigatório' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "document", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'E-mail inválido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O e-mail é obrigatório' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'A senha é obrigatória' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'O saldo deve ser um valor numérico' }),
    (0, class_validator_1.Min)(0, { message: 'O saldo inicial não pode ser negativo' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "balance", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.UserType, { message: 'O tipo deve ser COMMON ou MERCHANT' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O tipo de usuário é obrigatório' }),
    __metadata("design:type", typeof (_a = typeof client_1.UserType !== "undefined" && client_1.UserType) === "function" ? _a : Object)
], CreateUserDto.prototype, "type", void 0);
//# sourceMappingURL=create-user.dto.js.map