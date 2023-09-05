import { deserializeIntoDeviceAndAppManagementData } from './deserializeIntoDeviceAndAppManagementData';
import { type DeviceAndAppManagementData } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementDataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceAndAppManagementData;
}
