import { createIdentityUserFlowAttributeFromDiscriminatorValue } from './createIdentityUserFlowAttributeFromDiscriminatorValue';
import { createUserAttributeValuesItemFromDiscriminatorValue } from './createUserAttributeValuesItemFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type IdentityUserFlowAttribute } from './identityUserFlowAttribute';
import { type IdentityUserFlowAttributeAssignment } from './identityUserFlowAttributeAssignment';
import { IdentityUserFlowAttributeInputType } from './identityUserFlowAttributeInputType';
import { serializeIdentityUserFlowAttribute } from './serializeIdentityUserFlowAttribute';
import { serializeUserAttributeValuesItem } from './serializeUserAttributeValuesItem';
import { type UserAttributeValuesItem } from './userAttributeValuesItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityUserFlowAttributeAssignment(identityUserFlowAttributeAssignment: IdentityUserFlowAttributeAssignment | undefined = {} as IdentityUserFlowAttributeAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityUserFlowAttributeAssignment),
        "displayName": n => { identityUserFlowAttributeAssignment.displayName = n.getStringValue(); },
        "isOptional": n => { identityUserFlowAttributeAssignment.isOptional = n.getBooleanValue(); },
        "requiresVerification": n => { identityUserFlowAttributeAssignment.requiresVerification = n.getBooleanValue(); },
        "userAttribute": n => { identityUserFlowAttributeAssignment.userAttribute = n.getObjectValue<IdentityUserFlowAttribute>(createIdentityUserFlowAttributeFromDiscriminatorValue); },
        "userAttributeValues": n => { identityUserFlowAttributeAssignment.userAttributeValues = n.getCollectionOfObjectValues<UserAttributeValuesItem>(createUserAttributeValuesItemFromDiscriminatorValue); },
        "userInputType": n => { identityUserFlowAttributeAssignment.userInputType = n.getEnumValue<IdentityUserFlowAttributeInputType>(IdentityUserFlowAttributeInputType); },
    }
}
