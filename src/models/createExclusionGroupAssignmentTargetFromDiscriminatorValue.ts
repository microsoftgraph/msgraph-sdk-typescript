import {deserializeIntoExclusionGroupAssignmentTarget} from './deserializeIntoExclusionGroupAssignmentTarget';
import {ExclusionGroupAssignmentTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExclusionGroupAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExclusionGroupAssignmentTarget;
}
