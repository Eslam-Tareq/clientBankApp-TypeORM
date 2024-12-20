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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const typeorm_1 = require("typeorm");
const person_1 = require("./utils/person");
const transaction_1 = require("./transaction");
const banker_1 = require("./banker");
let Client = class Client extends person_1.Person {
};
exports.Client = Client;
__decorate([
    (0, typeorm_1.Column)({ type: "numeric" }),
    __metadata("design:type", Number)
], Client.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Client.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", nullable: true }),
    __metadata("design:type", Object)
], Client.prototype, "additionalInfo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-array", default: [] }),
    __metadata("design:type", Array)
], Client.prototype, "family", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_1.Transaction, (transaction) => transaction.client),
    __metadata("design:type", Array)
], Client.prototype, "transactions", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => banker_1.Banker, { cascade: false }),
    __metadata("design:type", Array)
], Client.prototype, "bankers", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Client.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Client.prototype, "updatedAt", void 0);
exports.Client = Client = __decorate([
    (0, typeorm_1.Entity)()
], Client);
//# sourceMappingURL=client.js.map