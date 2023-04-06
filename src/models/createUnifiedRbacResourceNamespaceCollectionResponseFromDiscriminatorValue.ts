import {UnifiedRbacResourceNamespaceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRbacResourceNamespaceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRbacResourceNamespaceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRbacResourceNamespaceCollectionResponse();
}
