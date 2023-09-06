import { deserializeIntoIdentityBuiltInUserFlowAttribute } from './deserializeIntoIdentityBuiltInUserFlowAttribute';
import { type IdentityBuiltInUserFlowAttribute } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityBuiltInUserFlowAttributeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityBuiltInUserFlowAttribute;
}
