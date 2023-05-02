import {deserializeIntoDeviceManagementPartnerAssignment} from './deserializeIntoDeviceManagementPartnerAssignment';
import {DeviceManagementPartnerAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementPartnerAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementPartnerAssignment;
}
