import {DeviceAndAppManagementAssignmentTargetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAndAppManagementAssignmentTargetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceAndAppManagementAssignmentTargetImpl();
}
