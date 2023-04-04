import {UnifiedRbacResourceNamespace} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRbacResourceNamespaceFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRbacResourceNamespace {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRbacResourceNamespace();
}
