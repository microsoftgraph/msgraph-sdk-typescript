import {DeviceAppManagement} from './deviceAppManagement';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAppManagementFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAppManagement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceAppManagement();
}
