import {UnifiedRbacResourceAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRbacResourceActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRbacResourceAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRbacResourceAction();
}
