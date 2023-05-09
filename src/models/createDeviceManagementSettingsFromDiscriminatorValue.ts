import {deserializeIntoDeviceManagementSettings} from './deserializeIntoDeviceManagementSettings';
import {DeviceManagementSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementSettings;
}
