import type {DeviceManagementExportJob} from './deviceManagementExportJob';
import type {Entity} from './entity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementReports extends Entity, Parsable {
    /**
     * Entity representing a job to export a report
     */
    exportJobs?: DeviceManagementExportJob[] | undefined;
}
