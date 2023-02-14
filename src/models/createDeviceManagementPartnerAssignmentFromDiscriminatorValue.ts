import {DeviceManagementPartnerAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementPartnerAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementPartnerAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementPartnerAssignment();
}
