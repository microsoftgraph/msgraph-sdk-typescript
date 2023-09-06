import { deserializeIntoRoleDefinitionCollectionResponse } from './deserializeIntoRoleDefinitionCollectionResponse';
import { type RoleDefinitionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRoleDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoleDefinitionCollectionResponse;
}
