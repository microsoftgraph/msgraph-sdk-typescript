import {deserializeIntoUnifiedRoleAssignmentScheduleCollectionResponse} from './deserializeIntoUnifiedRoleAssignmentScheduleCollectionResponse';
import {UnifiedRoleAssignmentScheduleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentScheduleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleAssignmentScheduleCollectionResponse;
}
