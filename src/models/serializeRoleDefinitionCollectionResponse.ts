import type {RoleDefinition} from './roleDefinition';
import type {RoleDefinitionCollectionResponse} from './roleDefinitionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRoleDefinition} from './serializeRoleDefinition';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoleDefinitionCollectionResponse(writer: SerializationWriter, roleDefinitionCollectionResponse: RoleDefinitionCollectionResponse | undefined = {} as RoleDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, roleDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<RoleDefinition>("value", roleDefinitionCollectionResponse.value, serializeRoleDefinition);
}
