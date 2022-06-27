import {ExclusionGroupAssignmentTargetImpl, GroupAssignmentTargetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupAssignmentTargetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.exclusionGroupAssignmentTarget":
                    return new ExclusionGroupAssignmentTargetImpl();
            }
        }
    }
    return new GroupAssignmentTargetImpl();
}
