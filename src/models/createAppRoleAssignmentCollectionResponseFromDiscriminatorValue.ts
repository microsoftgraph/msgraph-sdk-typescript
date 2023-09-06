import { deserializeIntoAppRoleAssignmentCollectionResponse } from './deserializeIntoAppRoleAssignmentCollectionResponse';
import { type AppRoleAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppRoleAssignmentCollectionResponse;
}
