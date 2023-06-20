import {IdentityCustomUserFlowAttribute} from './identityCustomUserFlowAttribute';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityCustomUserFlowAttribute(identityCustomUserFlowAttribute: IdentityCustomUserFlowAttribute | undefined = {} as IdentityCustomUserFlowAttribute, writer: SerializationWriter) : void {
        serializeIdentityUserFlowAttribute(writer, identityCustomUserFlowAttribute)
}
