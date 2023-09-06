import { deserializeIntoExclusionGroupAssignmentTarget } from './deserializeIntoExclusionGroupAssignmentTarget';
import { type ExclusionGroupAssignmentTarget } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExclusionGroupAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExclusionGroupAssignmentTarget;
}
