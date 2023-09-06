import { deserializeIntoUnifiedRoleAssignmentScheduleInstance } from './deserializeIntoUnifiedRoleAssignmentScheduleInstance';
import { type UnifiedRoleAssignmentScheduleInstance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleAssignmentScheduleInstance;
}
