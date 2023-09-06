import { deserializeIntoDeviceManagementSettings } from './deserializeIntoDeviceManagementSettings';
import { type DeviceManagementSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceManagementSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementSettings;
}
