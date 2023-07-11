import {DeviceManagementExportJob} from './deviceManagementExportJob';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementReports extends Entity, Parsable {
    /**
     * Entity representing a job to export a report
     */
    exportJobs?: DeviceManagementExportJob[] | undefined;
}
