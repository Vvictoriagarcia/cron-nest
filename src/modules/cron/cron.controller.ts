import { Controller, Get, Param, Put, } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CronService } from './cron.service';

@Controller('api/v1/cron')
@ApiTags('Cron')
export class CronController {
    constructor(private cronService : CronService){}

//-----------------------------------------------------

@ApiOperation({
    description : 'desactivates a cron'
})
@ApiParam({
    description: 'name of the cron we want to desactivate',
    name : 'name',
    type : String,
    required : true
})
@ApiResponse({
    status : 200,
    description : 'cron desactivated successfully'
})
@ApiResponse({
    status : 409,
    description : 'the cron doesnt exist'
})
    @Put('/desactivate/:name')
    desactivateCron(@Param('name') name : string){
        return this.cronService.desactivateCron(name)
    }


//-----------------------------------------------------   

    @ApiOperation({
        description : 'activates a cron'
    })
    @ApiParam({
        description: 'name of the cron we want to activate',
        name : 'name',
        type : String,
        required : true
    })
    @ApiResponse({
        status : 200,
        description : 'cron activated successfully'
    })
    @ApiResponse({
        status : 409,
        description : 'the cron doesnt exist'
    })
    @Put('/activate/:name')
    activateCron(@Param('name') name : string){
        return this.cronService.activateCron(name)
    }

//-----------------------------------------------------    

    @ApiOperation({
        description: 'Get crons names'
    })
    @ApiResponse({
        status : 200,
        description : 'All crons brougth succesfully'
    })
    @Get()
    getCronNames(){
        return this.cronService.getCronNames()
    }

//-----------------------------------------------------    
    @ApiOperation({
        description : 'desactivates all crons at the same time'
    })
    @ApiResponse({
        status : 200,
        description : 'crons desactivated succesfully'
    })
    @Put('/desactivate-all')
    desactivateAllCron(){
        return this.cronService.desactivateAllCron()
    }

//-----------------------------------------------------    

    @ApiOperation({
        description : 'activates all crons at the same time'
    })
    @ApiResponse({
        status : 200,
        description : 'crons activated succesfully'
    })
    @Put('/activate-all')
    activateAllCron(){
        return this.cronService.activateAllCron()
    }

}
