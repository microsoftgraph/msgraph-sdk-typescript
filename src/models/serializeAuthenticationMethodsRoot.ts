import { type AuthenticationMethodsRoot } from './authenticationMethodsRoot';
import { serializeEntity } from './serializeEntity';
import { serializeUserRegistrationDetails } from './serializeUserRegistrationDetails';
import { type UserRegistrationDetails } from './userRegistrationDetails';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodsRoot(writer: SerializationWriter, authenticationMethodsRoot: AuthenticationMethodsRoot | undefined = {} as AuthenticationMethodsRoot) : void {
        serializeEntity(writer, authenticationMethodsRoot)
        writer.writeCollectionOfObjectValues<UserRegistrationDetails>("userRegistrationDetails", authenticationMethodsRoot.userRegistrationDetails, serializeUserRegistrationDetails);
}
