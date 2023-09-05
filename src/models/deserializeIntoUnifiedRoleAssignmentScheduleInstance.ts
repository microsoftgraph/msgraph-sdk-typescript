import { createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue } from './createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import { deserializeIntoUnifiedRoleScheduleInstanceBase } from './deserializeIntoUnifiedRoleScheduleInstanceBase';
import { serializeUnifiedRoleEligibilityScheduleInstance } from './serializeUnifiedRoleEligibilityScheduleInstance';
import { type UnifiedRoleAssignmentScheduleInstance } from './unifiedRoleAssignmentScheduleInstance';
import { type UnifiedRoleEligibilityScheduleInstance } from './unifiedRoleEligibilityScheduleInstance';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentScheduleInstance(unifiedRoleAssignmentScheduleInstance: UnifiedRoleAssignmentScheduleInstance | undefined = {} as UnifiedRoleAssignmentScheduleInstance) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleScheduleInstanceBase(unifiedRoleAssignmentScheduleInstance),
        "activatedUsing": n => { unifiedRoleAssignmentScheduleInstance.activatedUsing = n.getObjectValue<UnifiedRoleEligibilityScheduleInstance>(createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue); },
        "assignmentType": n => { unifiedRoleAssignmentScheduleInstance.assignmentType = n.getStringValue(); },
        "endDateTime": n => { unifiedRoleAssignmentScheduleInstance.endDateTime = n.getDateValue(); },
        "memberType": n => { unifiedRoleAssignmentScheduleInstance.memberType = n.getStringValue(); },
        "roleAssignmentOriginId": n => { unifiedRoleAssignmentScheduleInstance.roleAssignmentOriginId = n.getStringValue(); },
        "roleAssignmentScheduleId": n => { unifiedRoleAssignmentScheduleInstance.roleAssignmentScheduleId = n.getStringValue(); },
        "startDateTime": n => { unifiedRoleAssignmentScheduleInstance.startDateTime = n.getDateValue(); },
    }
}
