import { CronService } from './cron.service';
export declare class CronController {
    private cronService;
    constructor(cronService: CronService);
    desactivateCron(name: string): boolean;
    activateCron(name: string): boolean;
    getCronNames(): any[];
    desactivateAllCron(): boolean;
    activateAllCron(): boolean;
}
