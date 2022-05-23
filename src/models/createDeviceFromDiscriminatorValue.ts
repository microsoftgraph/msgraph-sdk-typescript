import {DeviceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceImpl();
}
