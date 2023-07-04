import {AuthenticationMethodsRoot} from './authenticationMethodsRoot';
import {createUserRegistrationDetailsFromDiscriminatorValue} from './createUserRegistrationDetailsFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeUserRegistrationDetails} from './serializeUserRegistrationDetails';
import {UserRegistrationDetails} from './userRegistrationDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodsRoot(authenticationMethodsRoot: AuthenticationMethodsRoot | undefined = {} as AuthenticationMethodsRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationMethodsRoot),
        "userRegistrationDetails": n => { authenticationMethodsRoot.userRegistrationDetails = n.getCollectionOfObjectValues<UserRegistrationDetails>(createUserRegistrationDetailsFromDiscriminatorValue); },
    }
}
