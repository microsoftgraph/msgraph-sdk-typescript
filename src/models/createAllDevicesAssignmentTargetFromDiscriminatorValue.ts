import {AllDevicesAssignmentTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAllDevicesAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : AllDevicesAssignmentTarget {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AllDevicesAssignmentTarget();
}
