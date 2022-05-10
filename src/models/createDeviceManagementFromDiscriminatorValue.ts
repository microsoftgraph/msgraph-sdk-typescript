import {DeviceManagementImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementImpl();
}
