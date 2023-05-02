import {deserializeIntoExclusionGroupAssignmentTarget} from './deserializeIntoExclusionGroupAssignmentTarget';
import {deserializeIntoGroupAssignmentTarget} from './deserializeIntoGroupAssignmentTarget';
import {ExclusionGroupAssignmentTarget, GroupAssignmentTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.exclusionGroupAssignmentTarget":
                    return deserializeIntoExclusionGroupAssignmentTarget;
            }
        }
    }
    return deserializeIntoGroupAssignmentTarget;
}
