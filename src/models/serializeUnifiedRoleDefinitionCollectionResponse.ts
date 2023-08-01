import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import type {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import type {UnifiedRoleDefinitionCollectionResponse} from './unifiedRoleDefinitionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleDefinitionCollectionResponse(writer: SerializationWriter, unifiedRoleDefinitionCollectionResponse: UnifiedRoleDefinitionCollectionResponse | undefined = {} as UnifiedRoleDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleDefinition>("value", unifiedRoleDefinitionCollectionResponse.value, serializeUnifiedRoleDefinition);
}
