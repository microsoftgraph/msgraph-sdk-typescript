import {IdentityBuiltInUserFlowAttribute} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityBuiltInUserFlowAttributeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityBuiltInUserFlowAttribute {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityBuiltInUserFlowAttribute();
}
