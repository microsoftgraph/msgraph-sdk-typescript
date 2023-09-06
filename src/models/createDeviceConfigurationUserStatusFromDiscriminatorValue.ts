import { deserializeIntoDeviceConfigurationUserStatus } from './deserializeIntoDeviceConfigurationUserStatus';
import { type DeviceConfigurationUserStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationUserStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationUserStatus;
}
