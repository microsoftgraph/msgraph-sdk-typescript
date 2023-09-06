import { deserializeIntoUnifiedRoleAssignmentScheduleRequestCollectionResponse } from './deserializeIntoUnifiedRoleAssignmentScheduleRequestCollectionResponse';
import { type UnifiedRoleAssignmentScheduleRequestCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleAssignmentScheduleRequestCollectionResponse;
}
