import {IdentityBuiltInUserFlowAttribute} from './identityBuiltInUserFlowAttribute';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityBuiltInUserFlowAttribute(identityBuiltInUserFlowAttribute: IdentityBuiltInUserFlowAttribute | undefined = {} as IdentityBuiltInUserFlowAttribute, writer: SerializationWriter) : void {
        serializeIdentityUserFlowAttribute(writer, identityBuiltInUserFlowAttribute)
}
