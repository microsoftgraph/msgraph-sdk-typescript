import {RoleAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoleAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoleAssignmentCollectionResponseImpl();
}
