"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTranferDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tranfer_dto_1 = require("./create-tranfer.dto");
class UpdateTranferDto extends (0, mapped_types_1.PartialType)(create_tranfer_dto_1.CreateTranferDto) {
}
exports.UpdateTranferDto = UpdateTranferDto;
//# sourceMappingURL=update-tranfer.dto.js.map