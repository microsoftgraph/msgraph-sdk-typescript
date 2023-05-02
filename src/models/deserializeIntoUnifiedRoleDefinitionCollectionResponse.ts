import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleDefinitionCollectionResponse} from './unifiedRoleDefinitionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleDefinitionCollectionResponse(unifiedRoleDefinitionCollectionResponse: UnifiedRoleDefinitionCollectionResponse | undefined = {} as UnifiedRoleDefinitionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleDefinitionCollectionResponse),
        "value": n => { unifiedRoleDefinitionCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleDefinition>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
    }
}
