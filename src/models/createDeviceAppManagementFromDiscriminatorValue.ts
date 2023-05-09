import {deserializeIntoDeviceAppManagement} from './deserializeIntoDeviceAppManagement';
import {DeviceAppManagement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAppManagementFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceAppManagement;
}
