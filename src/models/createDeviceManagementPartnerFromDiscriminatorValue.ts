import {deserializeIntoDeviceManagementPartner} from './deserializeIntoDeviceManagementPartner';
import {DeviceManagementPartner} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementPartner;
}
