import {deserializeIntoDeviceAndAppManagementData} from './deserializeIntoDeviceAndAppManagementData';
import {DeviceAndAppManagementData} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementDataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceAndAppManagementData;
}
