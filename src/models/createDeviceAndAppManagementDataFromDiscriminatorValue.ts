import {DeviceAndAppManagementData} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementDataFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAndAppManagementData {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceAndAppManagementData();
}
