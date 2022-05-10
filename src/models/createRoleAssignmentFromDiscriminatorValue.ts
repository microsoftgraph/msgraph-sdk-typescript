import {RoleAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoleAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoleAssignmentImpl();
}
