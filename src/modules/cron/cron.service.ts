import { ConflictException, Injectable } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class CronService {
    constructor(private schedulerRegistry : SchedulerRegistry){}

    @Cron('*/10 * * * * *', {
        name : 'cron1'
    })
    cron1(){
        console.log('Cron1: accion cada 10s');
        
    }

    @Cron('*/30 * * * * *', {
        name : 'cron2'
    })
    cron2(){
        console.log('Cron2: accion cada 30s');
        
    }

    @Cron('* * * * *', {
        name : 'cron3'
    })
    cron3(){
        console.log('Cron3: accion cada 1m');
        
    }

    desactivateCron(name : string){
        const job: CronJob = this.schedulerRegistry.getCronJob(name)

        if(!job){
            throw new ConflictException('the cron doesnt exist')
        }else{
            job.stop()
            console.log(`the cron ${name} has been desactivated`);
            return true
        }
    }

    activateCron(name : string){
        const job: CronJob = this.schedulerRegistry.getCronJob(name)

        if(!job){
            throw new ConflictException('the cron doesnt exist')
        }else{
            job.start()
            console.log(`the cron ${name} has been activated`);
            return true
        }
    }

    getCronNames(){
        const names = []
        for (const nameCron of this.schedulerRegistry.getCronJobs().keys()) {
            names.push(nameCron)
        }
        return names
    }

    desactivateAllCron(){
        const names = this.getCronNames()

        for (const name of names) {
            this.desactivateCron(name)
        }
        return true
    }

    activateAllCron(){
        const names = this.getCronNames()

        for (const name of names) {
            this.activateCron(name)
        }
        return true
    }
}
