import { type DeviceManagementPartner } from './deviceManagementPartner';
import { type DeviceManagementPartnerCollectionResponse } from './deviceManagementPartnerCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceManagementPartner } from './serializeDeviceManagementPartner';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementPartnerCollectionResponse(writer: SerializationWriter, deviceManagementPartnerCollectionResponse: DeviceManagementPartnerCollectionResponse | undefined = {} as DeviceManagementPartnerCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceManagementPartnerCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceManagementPartner>("value", deviceManagementPartnerCollectionResponse.value, serializeDeviceManagementPartner);
}
