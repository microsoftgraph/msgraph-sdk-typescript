import { createUnifiedRoleDefinitionFromDiscriminatorValue } from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleDefinition } from './serializeUnifiedRoleDefinition';
import { type UnifiedRoleDefinition } from './unifiedRoleDefinition';
import { type UnifiedRoleDefinitionCollectionResponse } from './unifiedRoleDefinitionCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleDefinitionCollectionResponse(unifiedRoleDefinitionCollectionResponse: UnifiedRoleDefinitionCollectionResponse | undefined = {} as UnifiedRoleDefinitionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleDefinitionCollectionResponse),
        "value": n => { unifiedRoleDefinitionCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleDefinition>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
    }
}
