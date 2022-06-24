import {IdentityBuiltInUserFlowAttributeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityBuiltInUserFlowAttributeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityBuiltInUserFlowAttributeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityBuiltInUserFlowAttributeImpl();
}
