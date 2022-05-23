import {DeviceConfigurationDeviceStatusImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationDeviceStatusImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationDeviceStatusImpl();
}
