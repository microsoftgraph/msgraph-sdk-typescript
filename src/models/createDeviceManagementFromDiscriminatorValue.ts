import { deserializeIntoDeviceManagement } from './deserializeIntoDeviceManagement';
import { type DeviceManagement } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceManagementFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagement;
}
