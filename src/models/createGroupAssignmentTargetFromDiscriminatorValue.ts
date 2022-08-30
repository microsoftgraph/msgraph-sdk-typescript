import {ExclusionGroupAssignmentTarget, GroupAssignmentTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupAssignmentTarget {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.exclusionGroupAssignmentTarget":
                    return new ExclusionGroupAssignmentTarget();
            }
        }
    }
    return new GroupAssignmentTarget();
}
