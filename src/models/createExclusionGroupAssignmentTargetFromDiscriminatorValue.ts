import {ExclusionGroupAssignmentTargetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExclusionGroupAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExclusionGroupAssignmentTargetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExclusionGroupAssignmentTargetImpl();
}
