import {AllDevicesAssignmentTargetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAllDevicesAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : AllDevicesAssignmentTargetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AllDevicesAssignmentTargetImpl();
}
