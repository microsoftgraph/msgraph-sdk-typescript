import { createRequestScheduleFromDiscriminatorValue } from './createRequestScheduleFromDiscriminatorValue';
import { createUnifiedRoleEligibilityScheduleFromDiscriminatorValue } from './createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import { deserializeIntoUnifiedRoleScheduleBase } from './deserializeIntoUnifiedRoleScheduleBase';
import { type RequestSchedule } from './requestSchedule';
import { serializeRequestSchedule } from './serializeRequestSchedule';
import { serializeUnifiedRoleEligibilitySchedule } from './serializeUnifiedRoleEligibilitySchedule';
import { type UnifiedRoleAssignmentSchedule } from './unifiedRoleAssignmentSchedule';
import { type UnifiedRoleEligibilitySchedule } from './unifiedRoleEligibilitySchedule';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentSchedule(unifiedRoleAssignmentSchedule: UnifiedRoleAssignmentSchedule | undefined = {} as UnifiedRoleAssignmentSchedule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleScheduleBase(unifiedRoleAssignmentSchedule),
        "activatedUsing": n => { unifiedRoleAssignmentSchedule.activatedUsing = n.getObjectValue<UnifiedRoleEligibilitySchedule>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
        "assignmentType": n => { unifiedRoleAssignmentSchedule.assignmentType = n.getStringValue(); },
        "memberType": n => { unifiedRoleAssignmentSchedule.memberType = n.getStringValue(); },
        "scheduleInfo": n => { unifiedRoleAssignmentSchedule.scheduleInfo = n.getObjectValue<RequestSchedule>(createRequestScheduleFromDiscriminatorValue); },
    }
}
