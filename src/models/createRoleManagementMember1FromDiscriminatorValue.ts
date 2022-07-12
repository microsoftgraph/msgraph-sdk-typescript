import {RoleManagementMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleManagementMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : RoleManagementMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoleManagementMember1();
}
