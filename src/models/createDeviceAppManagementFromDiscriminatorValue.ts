import {DeviceAppManagementImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAppManagementFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAppManagementImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceAppManagementImpl();
}
