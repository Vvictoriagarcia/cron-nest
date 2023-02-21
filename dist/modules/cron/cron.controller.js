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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cron_service_1 = require("./cron.service");
let CronController = class CronController {
    constructor(cronService) {
        this.cronService = cronService;
    }
    desactivateCron(name) {
        return this.cronService.desactivateCron(name);
    }
    activateCron(name) {
        return this.cronService.activateCron(name);
    }
    getCronNames() {
        return this.cronService.getCronNames();
    }
    desactivateAllCron() {
        return this.cronService.desactivateAllCron();
    }
    activateAllCron() {
        return this.cronService.activateAllCron();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'desactivates a cron'
    }),
    (0, swagger_1.ApiParam)({
        description: 'name of the cron we want to desactivate',
        name: 'name',
        type: String,
        required: true
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'cron desactivated successfully'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'the cron doesnt exist'
    }),
    (0, common_1.Put)('/desactivate/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CronController.prototype, "desactivateCron", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'activates a cron'
    }),
    (0, swagger_1.ApiParam)({
        description: 'name of the cron we want to activate',
        name: 'name',
        type: String,
        required: true
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'cron activated successfully'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'the cron doesnt exist'
    }),
    (0, common_1.Put)('/activate/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CronController.prototype, "activateCron", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'Get crons names'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'All crons brougth succesfully'
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronController.prototype, "getCronNames", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'desactivates all crons at the same time'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'crons desactivated succesfully'
    }),
    (0, common_1.Put)('/desactivate-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronController.prototype, "desactivateAllCron", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'activates all crons at the same time'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'crons activated succesfully'
    }),
    (0, common_1.Put)('/activate-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronController.prototype, "activateAllCron", null);
CronController = __decorate([
    (0, common_1.Controller)('api/v1/cron'),
    (0, swagger_1.ApiTags)('Cron'),
    __metadata("design:paramtypes", [cron_service_1.CronService])
], CronController);
exports.CronController = CronController;
//# sourceMappingURL=cron.controller.js.map