import {AuthenticationMethodModeDetail} from './authenticationMethodModeDetail';
import {AuthenticationMethodModes} from './authenticationMethodModes';
import {AuthenticationStrengthPolicy} from './authenticationStrengthPolicy';
import {AuthenticationStrengthRoot} from './authenticationStrengthRoot';
import {serializeAuthenticationMethodModeDetail} from './serializeAuthenticationMethodModeDetail';
import {serializeAuthenticationStrengthPolicy} from './serializeAuthenticationStrengthPolicy';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationStrengthRoot(authenticationStrengthRoot: AuthenticationStrengthRoot | undefined = {} as AuthenticationStrengthRoot, writer: SerializationWriter) : void {
        serializeEntity(writer, authenticationStrengthRoot)
        writer.writeCollectionOfObjectValues<AuthenticationMethodModeDetail>("authenticationMethodModes", authenticationStrengthRoot.authenticationMethodModes, serializeAuthenticationMethodModeDetail);
        if(authenticationStrengthRoot.combinations)
        writer.writeEnumValue<AuthenticationMethodModes>("combinations", ...authenticationStrengthRoot.combinations);
        writer.writeCollectionOfObjectValues<AuthenticationStrengthPolicy>("policies", authenticationStrengthRoot.policies, serializeAuthenticationStrengthPolicy);
}
