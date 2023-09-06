import { deserializeIntoIdentityUserFlowAttribute } from './deserializeIntoIdentityUserFlowAttribute';
import { type IdentityBuiltInUserFlowAttribute } from './identityBuiltInUserFlowAttribute';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityBuiltInUserFlowAttribute(identityBuiltInUserFlowAttribute: IdentityBuiltInUserFlowAttribute | undefined = {} as IdentityBuiltInUserFlowAttribute) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityUserFlowAttribute(identityBuiltInUserFlowAttribute),
    }
}
