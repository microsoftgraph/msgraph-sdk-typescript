import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {IdentityUserFlowAttributeDataType} from './identityUserFlowAttributeDataType';
import {IdentityUserFlowAttributeType} from './identityUserFlowAttributeType';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityUserFlowAttribute(identityUserFlowAttribute: IdentityUserFlowAttribute | undefined = {} as IdentityUserFlowAttribute, writer: SerializationWriter) : void {
        serializeEntity(writer, identityUserFlowAttribute)
        writer.writeEnumValue<IdentityUserFlowAttributeDataType>("dataType", identityUserFlowAttribute.dataType);
        writer.writeStringValue("description", identityUserFlowAttribute.description);
        writer.writeStringValue("displayName", identityUserFlowAttribute.displayName);
        writer.writeEnumValue<IdentityUserFlowAttributeType>("userFlowAttributeType", identityUserFlowAttribute.userFlowAttributeType);
}
