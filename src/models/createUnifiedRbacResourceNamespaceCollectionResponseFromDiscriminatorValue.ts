import { deserializeIntoUnifiedRbacResourceNamespaceCollectionResponse } from './deserializeIntoUnifiedRbacResourceNamespaceCollectionResponse';
import { type UnifiedRbacResourceNamespaceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRbacResourceNamespaceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRbacResourceNamespaceCollectionResponse;
}
