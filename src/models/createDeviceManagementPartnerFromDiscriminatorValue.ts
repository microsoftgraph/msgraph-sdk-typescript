import { deserializeIntoDeviceManagementPartner } from './deserializeIntoDeviceManagementPartner';
import { type DeviceManagementPartner } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceManagementPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementPartner;
}
