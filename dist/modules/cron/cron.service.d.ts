import { SchedulerRegistry } from '@nestjs/schedule';
export declare class CronService {
    private schedulerRegistry;
    constructor(schedulerRegistry: SchedulerRegistry);
    cron1(): void;
    cron2(): void;
    cron3(): void;
    desactivateCron(name: string): boolean;
    activateCron(name: string): boolean;
    getCronNames(): any[];
    desactivateAllCron(): boolean;
    activateAllCron(): boolean;
}
