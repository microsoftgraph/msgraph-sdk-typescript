import {createUnifiedRbacResourceNamespaceFromDiscriminatorValue} from './createUnifiedRbacResourceNamespaceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRbacResourceNamespace} from './serializeUnifiedRbacResourceNamespace';
import {UnifiedRbacResourceNamespace} from './unifiedRbacResourceNamespace';
import {UnifiedRbacResourceNamespaceCollectionResponse} from './unifiedRbacResourceNamespaceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRbacResourceNamespaceCollectionResponse(unifiedRbacResourceNamespaceCollectionResponse: UnifiedRbacResourceNamespaceCollectionResponse | undefined = {} as UnifiedRbacResourceNamespaceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRbacResourceNamespaceCollectionResponse),
        "value": n => { unifiedRbacResourceNamespaceCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRbacResourceNamespace>(createUnifiedRbacResourceNamespaceFromDiscriminatorValue); },
    }
}
