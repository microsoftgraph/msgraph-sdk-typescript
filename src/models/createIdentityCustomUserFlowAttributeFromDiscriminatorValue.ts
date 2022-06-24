import {IdentityCustomUserFlowAttributeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityCustomUserFlowAttributeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityCustomUserFlowAttributeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityCustomUserFlowAttributeImpl();
}
