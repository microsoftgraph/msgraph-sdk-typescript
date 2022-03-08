import {DeviceManagementPartnerCollectionResponse} from './deviceManagementPartnerCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementPartnerCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementPartnerCollectionResponse();
}
