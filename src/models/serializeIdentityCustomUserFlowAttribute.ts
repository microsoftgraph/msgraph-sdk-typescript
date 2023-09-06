import { type IdentityCustomUserFlowAttribute } from './identityCustomUserFlowAttribute';
import { serializeIdentityUserFlowAttribute } from './serializeIdentityUserFlowAttribute';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIdentityCustomUserFlowAttribute(writer: SerializationWriter, identityCustomUserFlowAttribute: IdentityCustomUserFlowAttribute | undefined = {} as IdentityCustomUserFlowAttribute) : void {
        serializeIdentityUserFlowAttribute(writer, identityCustomUserFlowAttribute)
}
