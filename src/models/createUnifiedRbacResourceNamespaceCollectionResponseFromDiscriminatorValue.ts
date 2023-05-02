import {deserializeIntoUnifiedRbacResourceNamespaceCollectionResponse} from './deserializeIntoUnifiedRbacResourceNamespaceCollectionResponse';
import {UnifiedRbacResourceNamespaceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRbacResourceNamespaceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRbacResourceNamespaceCollectionResponse;
}
