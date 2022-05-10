import {DeviceConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationImpl();
}
