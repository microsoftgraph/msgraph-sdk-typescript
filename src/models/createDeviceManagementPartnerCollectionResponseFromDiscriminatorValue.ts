import {deserializeIntoDeviceManagementPartnerCollectionResponse} from './deserializeIntoDeviceManagementPartnerCollectionResponse';
import {DeviceManagementPartnerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementPartnerCollectionResponse;
}
