import {RoleDefinitionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoleDefinitionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoleDefinitionImpl();
}
