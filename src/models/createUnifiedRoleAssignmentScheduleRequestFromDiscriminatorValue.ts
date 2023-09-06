import { deserializeIntoUnifiedRoleAssignmentScheduleRequest } from './deserializeIntoUnifiedRoleAssignmentScheduleRequest';
import { type UnifiedRoleAssignmentScheduleRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleAssignmentScheduleRequest;
}
