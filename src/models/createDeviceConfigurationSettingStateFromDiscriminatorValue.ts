import { deserializeIntoDeviceConfigurationSettingState } from './deserializeIntoDeviceConfigurationSettingState';
import { type DeviceConfigurationSettingState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationSettingStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationSettingState;
}
