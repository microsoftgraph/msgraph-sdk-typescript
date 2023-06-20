import {DeviceManagementPartner} from './deviceManagementPartner';
import {DeviceManagementPartnerCollectionResponse} from './deviceManagementPartnerCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceManagementPartner} from './serializeDeviceManagementPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementPartnerCollectionResponse(deviceManagementPartnerCollectionResponse: DeviceManagementPartnerCollectionResponse | undefined = {} as DeviceManagementPartnerCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceManagementPartnerCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceManagementPartner>("value", deviceManagementPartnerCollectionResponse.value, serializeDeviceManagementPartner);
}
