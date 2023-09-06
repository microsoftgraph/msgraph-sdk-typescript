import { deserializeIntoDeviceAppManagement } from './deserializeIntoDeviceAppManagement';
import { type DeviceAppManagement } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceAppManagementFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceAppManagement;
}
