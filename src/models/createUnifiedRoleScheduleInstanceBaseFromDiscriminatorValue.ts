import {deserializeIntoUnifiedRoleAssignmentScheduleInstance} from './deserializeIntoUnifiedRoleAssignmentScheduleInstance';
import {deserializeIntoUnifiedRoleEligibilityScheduleInstance} from './deserializeIntoUnifiedRoleEligibilityScheduleInstance';
import {deserializeIntoUnifiedRoleScheduleInstanceBase} from './deserializeIntoUnifiedRoleScheduleInstanceBase';
import {UnifiedRoleAssignmentScheduleInstance, UnifiedRoleEligibilityScheduleInstance, UnifiedRoleScheduleInstanceBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleScheduleInstanceBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.unifiedRoleAssignmentScheduleInstance":
                    return deserializeIntoUnifiedRoleAssignmentScheduleInstance;
                case "#microsoft.graph.unifiedRoleEligibilityScheduleInstance":
                    return deserializeIntoUnifiedRoleEligibilityScheduleInstance;
            }
        }
    }
    return deserializeIntoUnifiedRoleScheduleInstanceBase;
}
