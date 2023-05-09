import {createRoleDefinitionFromDiscriminatorValue} from './createRoleDefinitionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {RoleDefinition} from './roleDefinition';
import {RoleDefinitionCollectionResponse} from './roleDefinitionCollectionResponse';
import {serializeRoleDefinition} from './serializeRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoleDefinitionCollectionResponse(roleDefinitionCollectionResponse: RoleDefinitionCollectionResponse | undefined = {} as RoleDefinitionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(roleDefinitionCollectionResponse),
        "value": n => { roleDefinitionCollectionResponse.value = n.getCollectionOfObjectValues<RoleDefinition>(createRoleDefinitionFromDiscriminatorValue); },
    }
}
