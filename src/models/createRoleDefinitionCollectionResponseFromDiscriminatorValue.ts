import {RoleDefinitionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoleDefinitionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoleDefinitionCollectionResponseImpl();
}
