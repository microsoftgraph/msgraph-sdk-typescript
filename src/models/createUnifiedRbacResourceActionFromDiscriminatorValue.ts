import {deserializeIntoUnifiedRbacResourceAction} from './deserializeIntoUnifiedRbacResourceAction';
import {UnifiedRbacResourceAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRbacResourceActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRbacResourceAction;
}
