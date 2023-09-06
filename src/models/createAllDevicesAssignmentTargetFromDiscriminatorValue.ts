import { deserializeIntoAllDevicesAssignmentTarget } from './deserializeIntoAllDevicesAssignmentTarget';
import { type AllDevicesAssignmentTarget } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAllDevicesAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAllDevicesAssignmentTarget;
}
