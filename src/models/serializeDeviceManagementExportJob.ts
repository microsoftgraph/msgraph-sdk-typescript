import {DeviceManagementExportJob} from './deviceManagementExportJob';
import {DeviceManagementExportJobLocalizationType} from './deviceManagementExportJobLocalizationType';
import {DeviceManagementReportFileFormat} from './deviceManagementReportFileFormat';
import {DeviceManagementReportStatus} from './deviceManagementReportStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementExportJob(writer: SerializationWriter, deviceManagementExportJob: DeviceManagementExportJob | undefined = {} as DeviceManagementExportJob) : void {
        serializeEntity(writer, deviceManagementExportJob)
        writer.writeDateValue("expirationDateTime", deviceManagementExportJob.expirationDateTime);
        writer.writeStringValue("filter", deviceManagementExportJob.filter);
        writer.writeEnumValue<DeviceManagementReportFileFormat>("format", deviceManagementExportJob.format);
        writer.writeEnumValue<DeviceManagementExportJobLocalizationType>("localizationType", deviceManagementExportJob.localizationType);
        writer.writeStringValue("reportName", deviceManagementExportJob.reportName);
        writer.writeDateValue("requestDateTime", deviceManagementExportJob.requestDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("select", deviceManagementExportJob.select);
        writer.writeStringValue("snapshotId", deviceManagementExportJob.snapshotId);
        writer.writeEnumValue<DeviceManagementReportStatus>("status", deviceManagementExportJob.status);
        writer.writeStringValue("url", deviceManagementExportJob.url);
}
