import { deserializeIntoUnifiedRoleAssignmentCollectionResponse } from './deserializeIntoUnifiedRoleAssignmentCollectionResponse';
import { type UnifiedRoleAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleAssignmentCollectionResponse;
}
