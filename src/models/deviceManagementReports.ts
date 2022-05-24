import {DeviceManagementExportJob} from './deviceManagementExportJob';
import {Entity} from './entity';

export interface DeviceManagementReports extends Entity{
    /** Entity representing a job to export a report */
    exportJobs?:DeviceManagementExportJob[] | undefined;
}
