import {deserializeIntoUnifiedRoleAssignmentSchedule} from './deserializeIntoUnifiedRoleAssignmentSchedule';
import {deserializeIntoUnifiedRoleEligibilitySchedule} from './deserializeIntoUnifiedRoleEligibilitySchedule';
import {deserializeIntoUnifiedRoleScheduleBase} from './deserializeIntoUnifiedRoleScheduleBase';
import {UnifiedRoleAssignmentSchedule, UnifiedRoleEligibilitySchedule, UnifiedRoleScheduleBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleScheduleBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.unifiedRoleAssignmentSchedule":
                    return deserializeIntoUnifiedRoleAssignmentSchedule;
                case "#microsoft.graph.unifiedRoleEligibilitySchedule":
                    return deserializeIntoUnifiedRoleEligibilitySchedule;
            }
        }
    }
    return deserializeIntoUnifiedRoleScheduleBase;
}
