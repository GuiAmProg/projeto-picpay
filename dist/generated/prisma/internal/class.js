"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.0",
    "engineVersion": "0edf323efd1d98336f3f0a68684b56f689b900d3",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nenum UserType {\n  COMMON\n  MERCHANT\n}\n\nmodel User {\n  id        String   @id @default(uuid())\n  fullName  String\n  document  String   @unique\n  email     String   @unique\n  password  String\n  balance   Decimal  @default(0.0)\n  type      UserType\n  createAt  DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map(\"users\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fullName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"document\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"balance\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"UserType\"},{\"name\":\"createAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"users\",\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"fullName\",\"document\",\"email\",\"password\",\"balance\",\"UserType\",\"type\",\"createAt\",\"updatedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "NQsQDBwAACgAMB0AAAQAEB4AACgAMB8BAAAAASABACkAISEBAAAAASIBAAAAASMBACkAISQQACoAISYAACsmIidAACwAIShAACwAIQEAAAABACABAAAAAQAgDBwAACgAMB0AAAQAEB4AACgAMB8BACkAISABACkAISEBACkAISIBACkAISMBACkAISQQACoAISYAACsmIidAACwAIShAACwAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAJHwEAAAABIAEAAAABIQEAAAABIgEAAAABIwEAAAABJBAAAAABJgAAACYCJ0AAAAABKEAAAAABAQgAAAkAIAkfAQAAAAEgAQAAAAEhAQAAAAEiAQAAAAEjAQAAAAEkEAAAAAEmAAAAJgInQAAAAAEoQAAAAAEBCAAACwAwAQgAAAsAMAkfAQAyACEgAQAyACEhAQAyACEiAQAyACEjAQAyACEkEAAzACEmAAA0JiInQAA1ACEoQAA1ACECAAAAAQAgCAAADgAgCR8BADIAISABADIAISEBADIAISIBADIAISMBADIAISQQADMAISYAADQmIidAADUAIShAADUAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBRUAAC0AIBYAAC4AIBcAADEAIBgAADAAIBkAAC8AIAwcAAAaADAdAAAXABAeAAAaADAfAQAbACEgAQAbACEhAQAbACEiAQAbACEjAQAbACEkEAAcACEmAAAdJiInQAAeACEoQAAeACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAwcAAAaADAdAAAXABAeAAAaADAfAQAbACEgAQAbACEhAQAbACEiAQAbACEjAQAbACEkEAAcACEmAAAdJiInQAAeACEoQAAeACEOFQAAIAAgGAAAJwAgGQAAJwAgKQEAAAABKgEAAAAEKwEAAAAELAEAAAABLQEAAAABLgEAAAABLwEAAAABMAEAJgAhMQEAAAABMgEAAAABMwEAAAABDRUAACAAIBYAACUAIBcAACUAIBgAACUAIBkAACUAICkQAAAAASoQAAAABCsQAAAABCwQAAAAAS0QAAAAAS4QAAAAAS8QAAAAATAQACQAIQcVAAAgACAYAAAjACAZAAAjACApAAAAJgIqAAAAJggrAAAAJggwAAAiJiILFQAAIAAgGAAAIQAgGQAAIQAgKUAAAAABKkAAAAAEK0AAAAAELEAAAAABLUAAAAABLkAAAAABL0AAAAABMEAAHwAhCxUAACAAIBgAACEAIBkAACEAIClAAAAAASpAAAAABCtAAAAABCxAAAAAAS1AAAAAAS5AAAAAAS9AAAAAATBAAB8AIQgpAgAAAAEqAgAAAAQrAgAAAAQsAgAAAAEtAgAAAAEuAgAAAAEvAgAAAAEwAgAgACEIKUAAAAABKkAAAAAEK0AAAAAELEAAAAABLUAAAAABLkAAAAABL0AAAAABMEAAIQAhBxUAACAAIBgAACMAIBkAACMAICkAAAAmAioAAAAmCCsAAAAmCDAAACImIgQpAAAAJgIqAAAAJggrAAAAJggwAAAjJiINFQAAIAAgFgAAJQAgFwAAJQAgGAAAJQAgGQAAJQAgKRAAAAABKhAAAAAEKxAAAAAELBAAAAABLRAAAAABLhAAAAABLxAAAAABMBAAJAAhCCkQAAAAASoQAAAABCsQAAAABCwQAAAAAS0QAAAAAS4QAAAAAS8QAAAAATAQACUAIQ4VAAAgACAYAAAnACAZAAAnACApAQAAAAEqAQAAAAQrAQAAAAQsAQAAAAEtAQAAAAEuAQAAAAEvAQAAAAEwAQAmACExAQAAAAEyAQAAAAEzAQAAAAELKQEAAAABKgEAAAAEKwEAAAAELAEAAAABLQEAAAABLgEAAAABLwEAAAABMAEAJwAhMQEAAAABMgEAAAABMwEAAAABDBwAACgAMB0AAAQAEB4AACgAMB8BACkAISABACkAISEBACkAISIBACkAISMBACkAISQQACoAISYAACsmIidAACwAIShAACwAIQspAQAAAAEqAQAAAAQrAQAAAAQsAQAAAAEtAQAAAAEuAQAAAAEvAQAAAAEwAQAnACExAQAAAAEyAQAAAAEzAQAAAAEIKRAAAAABKhAAAAAEKxAAAAAELBAAAAABLRAAAAABLhAAAAABLxAAAAABMBAAJQAhBCkAAAAmAioAAAAmCCsAAAAmCDAAACMmIggpQAAAAAEqQAAAAAQrQAAAAAQsQAAAAAEtQAAAAAEuQAAAAAEvQAAAAAEwQAAhACEAAAAAAAE0AQAAAAEFNBAAAAABNRAAAAABNhAAAAABNxAAAAABOBAAAAABATQAAAAmAgE0QAAAAAEAAAAABRUABhYABxcACBgACRkACgAAAAAABRUABhYABxcACBgACRkACgECAQIDAQUGAQYHAQcIAQkKAQoMAgsNAwwPAQ0RAg4SBBETARIUARMVAhoYBRsZCw"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map