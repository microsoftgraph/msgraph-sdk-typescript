import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleDefinitionCollectionResponse} from './unifiedRoleDefinitionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleDefinitionCollectionResponse(writer: SerializationWriter, unifiedRoleDefinitionCollectionResponse: UnifiedRoleDefinitionCollectionResponse | undefined = {} as UnifiedRoleDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleDefinition>("value", unifiedRoleDefinitionCollectionResponse.value, serializeUnifiedRoleDefinition);
}
