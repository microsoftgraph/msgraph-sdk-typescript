import {AuthenticationMethodsRoot} from './authenticationMethodsRoot';
import {serializeEntity} from './serializeEntity';
import {serializeUserRegistrationDetails} from './serializeUserRegistrationDetails';
import {UserRegistrationDetails} from './userRegistrationDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodsRoot(writer: SerializationWriter, authenticationMethodsRoot: AuthenticationMethodsRoot | undefined = {} as AuthenticationMethodsRoot) : void {
        serializeEntity(writer, authenticationMethodsRoot)
        writer.writeCollectionOfObjectValues<UserRegistrationDetails>("userRegistrationDetails", authenticationMethodsRoot.userRegistrationDetails, serializeUserRegistrationDetails);
}
