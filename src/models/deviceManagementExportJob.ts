import {DeviceManagementExportJobLocalizationType} from './deviceManagementExportJobLocalizationType';
import {DeviceManagementReportFileFormat} from './deviceManagementReportFileFormat';
import {DeviceManagementReportStatus} from './deviceManagementReportStatus';
import {Entity} from './entity';

export interface DeviceManagementExportJob extends Entity{
    /** Time that the exported report expires */
    expirationDateTime?:Date | undefined;
    /** Filters applied on the report */
    filter?:string | undefined;
    /** Format of the exported report. Possible values are: csv, pdf. */
    format?:DeviceManagementReportFileFormat | undefined;
    /** Configures how the requested export job is localized. Possible values are: localizedValuesAsAdditionalColumn, replaceLocalizableValues. */
    localizationType?:DeviceManagementExportJobLocalizationType | undefined;
    /** Name of the report */
    reportName?:string | undefined;
    /** Time that the exported report was requested */
    requestDateTime?:Date | undefined;
    /** Columns selected from the report */
    select?:string[] | undefined;
    /** A snapshot is an identifiable subset of the dataset represented by the ReportName. A sessionId or CachedReportConfiguration id can be used here. If a sessionId is specified, Filter, Select, and OrderBy are applied to the data represented by the sessionId. Filter, Select, and OrderBy cannot be specified together with a CachedReportConfiguration id. */
    snapshotId?:string | undefined;
    /** Status of the export job. Possible values are: unknown, notStarted, inProgress, completed, failed. */
    status?:DeviceManagementReportStatus | undefined;
    /** Temporary location of the exported report */
    url?:string | undefined;
}
