import {DeviceManagementPartner} from './deviceManagementPartner';
import {DeviceManagementPartnerCollectionResponse} from './deviceManagementPartnerCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceManagementPartner} from './serializeDeviceManagementPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementPartnerCollectionResponse(writer: SerializationWriter, deviceManagementPartnerCollectionResponse: DeviceManagementPartnerCollectionResponse | undefined = {} as DeviceManagementPartnerCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceManagementPartnerCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceManagementPartner>("value", deviceManagementPartnerCollectionResponse.value, serializeDeviceManagementPartner);
}
