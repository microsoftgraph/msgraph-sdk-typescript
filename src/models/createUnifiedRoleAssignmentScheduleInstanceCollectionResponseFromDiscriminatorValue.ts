import {deserializeIntoUnifiedRoleAssignmentScheduleInstanceCollectionResponse} from './deserializeIntoUnifiedRoleAssignmentScheduleInstanceCollectionResponse';
import {UnifiedRoleAssignmentScheduleInstanceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleInstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleAssignmentScheduleInstanceCollectionResponse;
}
