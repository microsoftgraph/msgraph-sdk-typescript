import {deserializeIntoUnifiedRbacResourceNamespace} from './deserializeIntoUnifiedRbacResourceNamespace';
import {UnifiedRbacResourceNamespace} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRbacResourceNamespaceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRbacResourceNamespace;
}
