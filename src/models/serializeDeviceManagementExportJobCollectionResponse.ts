import {DeviceManagementExportJob} from './deviceManagementExportJob';
import {DeviceManagementExportJobCollectionResponse} from './deviceManagementExportJobCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceManagementExportJob} from './serializeDeviceManagementExportJob';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementExportJobCollectionResponse(deviceManagementExportJobCollectionResponse: DeviceManagementExportJobCollectionResponse | undefined = {} as DeviceManagementExportJobCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceManagementExportJobCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceManagementExportJob>("value", deviceManagementExportJobCollectionResponse.value, serializeDeviceManagementExportJob);
}
