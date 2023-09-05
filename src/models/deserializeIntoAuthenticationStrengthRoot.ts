import { type AuthenticationMethodModeDetail } from './authenticationMethodModeDetail';
import { AuthenticationMethodModes } from './authenticationMethodModes';
import { type AuthenticationStrengthPolicy } from './authenticationStrengthPolicy';
import { type AuthenticationStrengthRoot } from './authenticationStrengthRoot';
import { createAuthenticationMethodModeDetailFromDiscriminatorValue } from './createAuthenticationMethodModeDetailFromDiscriminatorValue';
import { createAuthenticationStrengthPolicyFromDiscriminatorValue } from './createAuthenticationStrengthPolicyFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeAuthenticationMethodModeDetail } from './serializeAuthenticationMethodModeDetail';
import { serializeAuthenticationStrengthPolicy } from './serializeAuthenticationStrengthPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationStrengthRoot(authenticationStrengthRoot: AuthenticationStrengthRoot | undefined = {} as AuthenticationStrengthRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationStrengthRoot),
        "authenticationMethodModes": n => { authenticationStrengthRoot.authenticationMethodModes = n.getCollectionOfObjectValues<AuthenticationMethodModeDetail>(createAuthenticationMethodModeDetailFromDiscriminatorValue); },
        "combinations": n => { authenticationStrengthRoot.combinations = n.getCollectionOfEnumValues<AuthenticationMethodModes>(AuthenticationMethodModes); },
        "policies": n => { authenticationStrengthRoot.policies = n.getCollectionOfObjectValues<AuthenticationStrengthPolicy>(createAuthenticationStrengthPolicyFromDiscriminatorValue); },
    }
}
