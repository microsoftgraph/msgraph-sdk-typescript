import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRbacResourceNamespace} from './serializeUnifiedRbacResourceNamespace';
import type {UnifiedRbacResourceNamespace} from './unifiedRbacResourceNamespace';
import type {UnifiedRbacResourceNamespaceCollectionResponse} from './unifiedRbacResourceNamespaceCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRbacResourceNamespaceCollectionResponse(writer: SerializationWriter, unifiedRbacResourceNamespaceCollectionResponse: UnifiedRbacResourceNamespaceCollectionResponse | undefined = {} as UnifiedRbacResourceNamespaceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRbacResourceNamespaceCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRbacResourceNamespace>("value", unifiedRbacResourceNamespaceCollectionResponse.value, serializeUnifiedRbacResourceNamespace);
}
