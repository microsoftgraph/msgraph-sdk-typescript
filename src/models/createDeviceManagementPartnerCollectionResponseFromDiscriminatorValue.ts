import { deserializeIntoDeviceManagementPartnerCollectionResponse } from './deserializeIntoDeviceManagementPartnerCollectionResponse';
import { type DeviceManagementPartnerCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceManagementPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementPartnerCollectionResponse;
}
