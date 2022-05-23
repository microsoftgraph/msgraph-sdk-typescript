import {DeviceConfigurationUserStatusImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationUserStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationUserStatusImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationUserStatusImpl();
}
