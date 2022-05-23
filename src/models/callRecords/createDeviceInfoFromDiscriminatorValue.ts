import {DeviceInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceInfoImpl();
}
