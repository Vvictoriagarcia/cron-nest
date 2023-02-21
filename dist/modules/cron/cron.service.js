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
exports.CronService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
let CronService = class CronService {
    constructor(schedulerRegistry) {
        this.schedulerRegistry = schedulerRegistry;
    }
    cron1() {
        console.log('Cron1: accion cada 10s');
    }
    cron2() {
        console.log('Cron2: accion cada 30s');
    }
    cron3() {
        console.log('Cron3: accion cada 1m');
    }
    desactivateCron(name) {
        const job = this.schedulerRegistry.getCronJob(name);
        if (!job) {
            throw new common_1.ConflictException('the cron doesnt exist');
        }
        else {
            job.stop();
            console.log(`the cron ${name} has been desactivated`);
            return true;
        }
    }
    activateCron(name) {
        const job = this.schedulerRegistry.getCronJob(name);
        if (!job) {
            throw new common_1.ConflictException('the cron doesnt exist');
        }
        else {
            job.start();
            console.log(`the cron ${name} has been activated`);
            return true;
        }
    }
    getCronNames() {
        const names = [];
        for (const nameCron of this.schedulerRegistry.getCronJobs().keys()) {
            names.push(nameCron);
        }
        return names;
    }
    desactivateAllCron() {
        const names = this.getCronNames();
        for (const name of names) {
            this.desactivateCron(name);
        }
        return true;
    }
    activateAllCron() {
        const names = this.getCronNames();
        for (const name of names) {
            this.activateCron(name);
        }
        return true;
    }
};
__decorate([
    (0, schedule_1.Cron)('*/10 * * * * *', {
        name: 'cron1'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronService.prototype, "cron1", null);
__decorate([
    (0, schedule_1.Cron)('*/30 * * * * *', {
        name: 'cron2'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronService.prototype, "cron2", null);
__decorate([
    (0, schedule_1.Cron)('* * * * *', {
        name: 'cron3'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronService.prototype, "cron3", null);
CronService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [schedule_1.SchedulerRegistry])
], CronService);
exports.CronService = CronService;
//# sourceMappingURL=cron.service.js.map