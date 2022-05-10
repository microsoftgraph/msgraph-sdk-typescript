import {IdentityUserFlowAttributeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityUserFlowAttributeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityUserFlowAttributeImpl();
}
