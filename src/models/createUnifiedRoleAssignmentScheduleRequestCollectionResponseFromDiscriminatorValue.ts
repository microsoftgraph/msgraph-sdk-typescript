import {deserializeIntoUnifiedRoleAssignmentScheduleRequestCollectionResponse} from './deserializeIntoUnifiedRoleAssignmentScheduleRequestCollectionResponse';
import {UnifiedRoleAssignmentScheduleRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleAssignmentScheduleRequestCollectionResponse;
}
