import {DeviceManagementExportJob} from './deviceManagementExportJob';
import {DeviceManagementReports} from './deviceManagementReports';
import {serializeDeviceManagementExportJob} from './serializeDeviceManagementExportJob';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementReports(deviceManagementReports: DeviceManagementReports | undefined = {} as DeviceManagementReports, writer: SerializationWriter) : void {
        serializeEntity(writer, deviceManagementReports)
        writer.writeCollectionOfObjectValues<DeviceManagementExportJob>("exportJobs", deviceManagementReports.exportJobs, serializeDeviceManagementExportJob);
}
