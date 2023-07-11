import {DeviceManagementExportJobLocalizationType} from './deviceManagementExportJobLocalizationType';
import {DeviceManagementReportFileFormat} from './deviceManagementReportFileFormat';
import {DeviceManagementReportStatus} from './deviceManagementReportStatus';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementExportJob extends Entity, Parsable {
    /**
     * Time that the exported report expires
     */
    expirationDateTime?: Date | undefined;
    /**
     * Filters applied on the report
     */
    filter?: string | undefined;
    /**
     * Possible values for the file format of a report
     */
    format?: DeviceManagementReportFileFormat | undefined;
    /**
     * Configures how the requested export job is localized
     */
    localizationType?: DeviceManagementExportJobLocalizationType | undefined;
    /**
     * Name of the report
     */
    reportName?: string | undefined;
    /**
     * Time that the exported report was requested
     */
    requestDateTime?: Date | undefined;
    /**
     * Columns selected from the report
     */
    select?: string[] | undefined;
    /**
     * A snapshot is an identifiable subset of the dataset represented by the ReportName. A sessionId or CachedReportConfiguration id can be used here. If a sessionId is specified, Filter, Select, and OrderBy are applied to the data represented by the sessionId. Filter, Select, and OrderBy cannot be specified together with a CachedReportConfiguration id.
     */
    snapshotId?: string | undefined;
    /**
     * Possible statuses associated with a generated report
     */
    status?: DeviceManagementReportStatus | undefined;
    /**
     * Temporary location of the exported report
     */
    url?: string | undefined;
}
