import {DeviceManagementPartnerCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementPartnerCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementPartnerCollectionResponseImpl();
}
