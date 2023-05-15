import {deserializeIntoDeviceConfigurationDeviceStatus} from './deserializeIntoDeviceConfigurationDeviceStatus';
import {DeviceConfigurationDeviceStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationDeviceStatus;
}
