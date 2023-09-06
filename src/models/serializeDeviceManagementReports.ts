import { type DeviceManagementExportJob } from './deviceManagementExportJob';
import { type DeviceManagementReports } from './deviceManagementReports';
import { serializeDeviceManagementExportJob } from './serializeDeviceManagementExportJob';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementReports(writer: SerializationWriter, deviceManagementReports: DeviceManagementReports | undefined = {} as DeviceManagementReports) : void {
        serializeEntity(writer, deviceManagementReports)
        writer.writeCollectionOfObjectValues<DeviceManagementExportJob>("exportJobs", deviceManagementReports.exportJobs, serializeDeviceManagementExportJob);
}
