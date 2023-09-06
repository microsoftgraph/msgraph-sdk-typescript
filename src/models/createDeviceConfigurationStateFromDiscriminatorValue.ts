import { deserializeIntoDeviceConfigurationState } from './deserializeIntoDeviceConfigurationState';
import { type DeviceConfigurationState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationState;
}
