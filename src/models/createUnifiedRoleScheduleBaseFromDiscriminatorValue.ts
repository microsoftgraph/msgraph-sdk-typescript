import {UnifiedRoleAssignmentSchedule, UnifiedRoleEligibilitySchedule, UnifiedRoleScheduleBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleScheduleBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleScheduleBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.unifiedRoleAssignmentSchedule":
                    return new UnifiedRoleAssignmentSchedule();
                case "#microsoft.graph.unifiedRoleEligibilitySchedule":
                    return new UnifiedRoleEligibilitySchedule();
            }
        }
    }
    return new UnifiedRoleScheduleBase();
}
