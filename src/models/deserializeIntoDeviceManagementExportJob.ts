import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceManagementExportJob} from './deviceManagementExportJob';
import {DeviceManagementExportJobLocalizationType} from './deviceManagementExportJobLocalizationType';
import {DeviceManagementReportFileFormat} from './deviceManagementReportFileFormat';
import {DeviceManagementReportStatus} from './deviceManagementReportStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementExportJob(deviceManagementExportJob: DeviceManagementExportJob | undefined = {} as DeviceManagementExportJob) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceManagementExportJob),
        "expirationDateTime": n => { deviceManagementExportJob.expirationDateTime = n.getDateValue(); },
        "filter": n => { deviceManagementExportJob.filter = n.getStringValue(); },
        "format": n => { deviceManagementExportJob.format = n.getEnumValue<DeviceManagementReportFileFormat>(DeviceManagementReportFileFormat); },
        "localizationType": n => { deviceManagementExportJob.localizationType = n.getEnumValue<DeviceManagementExportJobLocalizationType>(DeviceManagementExportJobLocalizationType); },
        "reportName": n => { deviceManagementExportJob.reportName = n.getStringValue(); },
        "requestDateTime": n => { deviceManagementExportJob.requestDateTime = n.getDateValue(); },
        "select": n => { deviceManagementExportJob.select = n.getCollectionOfPrimitiveValues<string>(); },
        "snapshotId": n => { deviceManagementExportJob.snapshotId = n.getStringValue(); },
        "status": n => { deviceManagementExportJob.status = n.getEnumValue<DeviceManagementReportStatus>(DeviceManagementReportStatus); },
        "url": n => { deviceManagementExportJob.url = n.getStringValue(); },
    }
}
