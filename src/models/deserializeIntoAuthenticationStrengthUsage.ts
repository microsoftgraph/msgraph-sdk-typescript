import { type AuthenticationStrengthUsage } from './authenticationStrengthUsage';
import { type ConditionalAccessPolicy } from './conditionalAccessPolicy';
import { createConditionalAccessPolicyFromDiscriminatorValue } from './createConditionalAccessPolicyFromDiscriminatorValue';
import { serializeConditionalAccessPolicy } from './serializeConditionalAccessPolicy';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationStrengthUsage(authenticationStrengthUsage: AuthenticationStrengthUsage | undefined = {} as AuthenticationStrengthUsage) : Record<string, (node: ParseNode) => void> {
    return {
        "mfa": n => { authenticationStrengthUsage.mfa = n.getCollectionOfObjectValues<ConditionalAccessPolicy>(createConditionalAccessPolicyFromDiscriminatorValue); },
        "none": n => { authenticationStrengthUsage.none = n.getCollectionOfObjectValues<ConditionalAccessPolicy>(createConditionalAccessPolicyFromDiscriminatorValue); },
        "@odata.type": n => { authenticationStrengthUsage.odataType = n.getStringValue(); },
    }
}
