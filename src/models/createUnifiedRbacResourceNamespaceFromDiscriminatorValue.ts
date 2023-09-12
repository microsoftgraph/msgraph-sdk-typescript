import { deserializeIntoUnifiedRbacResourceNamespace } from './deserializeIntoUnifiedRbacResourceNamespace';
import { type UnifiedRbacResourceNamespace } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRbacResourceNamespaceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRbacResourceNamespace;
}
