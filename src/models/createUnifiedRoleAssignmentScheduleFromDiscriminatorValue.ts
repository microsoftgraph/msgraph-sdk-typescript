import { deserializeIntoUnifiedRoleAssignmentSchedule } from './deserializeIntoUnifiedRoleAssignmentSchedule';
import { type UnifiedRoleAssignmentSchedule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleAssignmentSchedule;
}
