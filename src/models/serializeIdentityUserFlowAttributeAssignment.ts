import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {IdentityUserFlowAttributeAssignment} from './identityUserFlowAttributeAssignment';
import {IdentityUserFlowAttributeInputType} from './identityUserFlowAttributeInputType';
import {serializeEntity} from './serializeEntity';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import {serializeUserAttributeValuesItem} from './serializeUserAttributeValuesItem';
import {UserAttributeValuesItem} from './userAttributeValuesItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityUserFlowAttributeAssignment(identityUserFlowAttributeAssignment: IdentityUserFlowAttributeAssignment | undefined = {} as IdentityUserFlowAttributeAssignment, writer: SerializationWriter) : void {
        serializeEntity(writer, identityUserFlowAttributeAssignment)
        writer.writeStringValue("displayName", identityUserFlowAttributeAssignment.displayName);
        writer.writeBooleanValue("isOptional", identityUserFlowAttributeAssignment.isOptional);
        writer.writeBooleanValue("requiresVerification", identityUserFlowAttributeAssignment.requiresVerification);
        writer.writeObjectValue<IdentityUserFlowAttribute>("userAttribute", identityUserFlowAttributeAssignment.userAttribute, serializeIdentityUserFlowAttribute);
        writer.writeCollectionOfObjectValues<UserAttributeValuesItem>("userAttributeValues", identityUserFlowAttributeAssignment.userAttributeValues, serializeUserAttributeValuesItem);
        writer.writeEnumValue<IdentityUserFlowAttributeInputType>("userInputType", identityUserFlowAttributeAssignment.userInputType);
}
