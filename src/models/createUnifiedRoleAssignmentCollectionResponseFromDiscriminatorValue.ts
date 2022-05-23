import {UnifiedRoleAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleAssignmentCollectionResponseImpl();
}
