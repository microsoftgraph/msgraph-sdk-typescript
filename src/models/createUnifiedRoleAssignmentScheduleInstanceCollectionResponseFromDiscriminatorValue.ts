import { deserializeIntoUnifiedRoleAssignmentScheduleInstanceCollectionResponse } from './deserializeIntoUnifiedRoleAssignmentScheduleInstanceCollectionResponse';
import { type UnifiedRoleAssignmentScheduleInstanceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleInstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleAssignmentScheduleInstanceCollectionResponse;
}
