import {RoleDefinitionCollectionResponse} from './roleDefinitionCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoleDefinitionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoleDefinitionCollectionResponse();
}
