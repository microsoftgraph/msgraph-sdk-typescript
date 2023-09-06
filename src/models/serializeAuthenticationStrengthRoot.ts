import { type AuthenticationMethodModeDetail } from './authenticationMethodModeDetail';
import { AuthenticationMethodModes } from './authenticationMethodModes';
import { type AuthenticationStrengthPolicy } from './authenticationStrengthPolicy';
import { type AuthenticationStrengthRoot } from './authenticationStrengthRoot';
import { serializeAuthenticationMethodModeDetail } from './serializeAuthenticationMethodModeDetail';
import { serializeAuthenticationStrengthPolicy } from './serializeAuthenticationStrengthPolicy';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAuthenticationStrengthRoot(writer: SerializationWriter, authenticationStrengthRoot: AuthenticationStrengthRoot | undefined = {} as AuthenticationStrengthRoot) : void {
        serializeEntity(writer, authenticationStrengthRoot)
        writer.writeCollectionOfObjectValues<AuthenticationMethodModeDetail>("authenticationMethodModes", authenticationStrengthRoot.authenticationMethodModes, serializeAuthenticationMethodModeDetail);
        writer.writeCollectionOfObjectValues<AuthenticationMethodModes>("combinations", authenticationStrengthRoot.combinations, object);
        writer.writeCollectionOfObjectValues<AuthenticationStrengthPolicy>("policies", authenticationStrengthRoot.policies, serializeAuthenticationStrengthPolicy);
}
