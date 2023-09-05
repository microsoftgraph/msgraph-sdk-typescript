import { deserializeIntoRoleAssignmentCollectionResponse } from './deserializeIntoRoleAssignmentCollectionResponse';
import { type RoleAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoleAssignmentCollectionResponse;
}
