import {IdentityCustomUserFlowAttribute} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityCustomUserFlowAttributeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityCustomUserFlowAttribute {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityCustomUserFlowAttribute();
}
