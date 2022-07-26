import {UnifiedRoleAssignmentScheduleInstance, UnifiedRoleEligibilityScheduleInstance, UnifiedRoleScheduleInstanceBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleScheduleInstanceBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleScheduleInstanceBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.unifiedRoleAssignmentScheduleInstance":
                    return new UnifiedRoleAssignmentScheduleInstance();
                case "#microsoft.graph.unifiedRoleEligibilityScheduleInstance":
                    return new UnifiedRoleEligibilityScheduleInstance();
            }
        }
    }
    return new UnifiedRoleScheduleInstanceBase();
}
