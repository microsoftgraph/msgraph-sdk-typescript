import { deserializeIntoDeviceConfigurationDeviceStatus } from './deserializeIntoDeviceConfigurationDeviceStatus';
import { type DeviceConfigurationDeviceStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationDeviceStatus;
}
