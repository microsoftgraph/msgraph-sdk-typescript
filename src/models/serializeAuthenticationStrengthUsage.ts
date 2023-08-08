import type {AuthenticationStrengthUsage} from './authenticationStrengthUsage';
import type {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {serializeConditionalAccessPolicy} from './serializeConditionalAccessPolicy';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationStrengthUsage(writer: SerializationWriter, authenticationStrengthUsage: AuthenticationStrengthUsage | undefined = {} as AuthenticationStrengthUsage) : void {
        writer.writeCollectionOfObjectValues<ConditionalAccessPolicy>("mfa", authenticationStrengthUsage.mfa, serializeConditionalAccessPolicy);
        writer.writeCollectionOfObjectValues<ConditionalAccessPolicy>("none", authenticationStrengthUsage.none, serializeConditionalAccessPolicy);
        writer.writeStringValue("@odata.type", authenticationStrengthUsage.odataType);
        writer.writeAdditionalData(authenticationStrengthUsage.additionalData);
}
