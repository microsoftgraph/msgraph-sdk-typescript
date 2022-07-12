import {DeviceConfigurationDeviceActivityResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceActivityResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationDeviceActivityResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationDeviceActivityResponseMember1();
}
