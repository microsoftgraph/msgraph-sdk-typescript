import { type DeviceManagementExportJob } from './deviceManagementExportJob';
import { type DeviceManagementExportJobCollectionResponse } from './deviceManagementExportJobCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceManagementExportJob } from './serializeDeviceManagementExportJob';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementExportJobCollectionResponse(writer: SerializationWriter, deviceManagementExportJobCollectionResponse: DeviceManagementExportJobCollectionResponse | undefined = {} as DeviceManagementExportJobCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceManagementExportJobCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceManagementExportJob>("value", deviceManagementExportJobCollectionResponse.value, serializeDeviceManagementExportJob);
}
