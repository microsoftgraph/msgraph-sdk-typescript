import {DeviceDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceDetailImpl();
}
