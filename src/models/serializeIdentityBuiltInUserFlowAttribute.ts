import {IdentityBuiltInUserFlowAttribute} from './identityBuiltInUserFlowAttribute';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityBuiltInUserFlowAttribute(writer: SerializationWriter, identityBuiltInUserFlowAttribute: IdentityBuiltInUserFlowAttribute | undefined = {} as IdentityBuiltInUserFlowAttribute) : void {
        serializeIdentityUserFlowAttribute(writer, identityBuiltInUserFlowAttribute)
}
