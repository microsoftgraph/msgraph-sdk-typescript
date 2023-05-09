import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRbacResourceNamespace} from './serializeUnifiedRbacResourceNamespace';
import {UnifiedRbacResourceNamespace} from './unifiedRbacResourceNamespace';
import {UnifiedRbacResourceNamespaceCollectionResponse} from './unifiedRbacResourceNamespaceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRbacResourceNamespaceCollectionResponse(writer: SerializationWriter, unifiedRbacResourceNamespaceCollectionResponse: UnifiedRbacResourceNamespaceCollectionResponse | undefined = {} as UnifiedRbacResourceNamespaceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRbacResourceNamespaceCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRbacResourceNamespace>("value", unifiedRbacResourceNamespaceCollectionResponse.value, serializeUnifiedRbacResourceNamespace);
}
