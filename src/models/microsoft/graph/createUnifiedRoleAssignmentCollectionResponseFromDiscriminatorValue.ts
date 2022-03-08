import {UnifiedRoleAssignmentCollectionResponse} from './unifiedRoleAssignmentCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleAssignmentCollectionResponse();
}
