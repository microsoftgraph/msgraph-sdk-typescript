import {deserializeIntoIdentityUserFlowAttribute} from './deserializeIntoIdentityUserFlowAttribute';
import {IdentityBuiltInUserFlowAttribute} from './identityBuiltInUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityBuiltInUserFlowAttribute(identityBuiltInUserFlowAttribute: IdentityBuiltInUserFlowAttribute | undefined = {} as IdentityBuiltInUserFlowAttribute) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityUserFlowAttribute(identityBuiltInUserFlowAttribute),
    }
}
