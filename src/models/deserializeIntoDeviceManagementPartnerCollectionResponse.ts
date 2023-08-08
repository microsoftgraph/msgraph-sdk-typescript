import {createDeviceManagementPartnerFromDiscriminatorValue} from './createDeviceManagementPartnerFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {DeviceManagementPartner} from './deviceManagementPartner';
import type {DeviceManagementPartnerCollectionResponse} from './deviceManagementPartnerCollectionResponse';
import {serializeDeviceManagementPartner} from './serializeDeviceManagementPartner';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementPartnerCollectionResponse(deviceManagementPartnerCollectionResponse: DeviceManagementPartnerCollectionResponse | undefined = {} as DeviceManagementPartnerCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceManagementPartnerCollectionResponse),
        "value": n => { deviceManagementPartnerCollectionResponse.value = n.getCollectionOfObjectValues<DeviceManagementPartner>(createDeviceManagementPartnerFromDiscriminatorValue); },
    }
}
