import {deserializeIntoRoleDefinitionCollectionResponse} from './deserializeIntoRoleDefinitionCollectionResponse';
import {RoleDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoleDefinitionCollectionResponse;
}
