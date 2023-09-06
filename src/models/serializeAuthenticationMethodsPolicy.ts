import { type AuthenticationMethodConfiguration } from './authenticationMethodConfiguration';
import { type AuthenticationMethodsPolicy } from './authenticationMethodsPolicy';
import { AuthenticationMethodsPolicyMigrationState } from './authenticationMethodsPolicyMigrationState';
import { type RegistrationEnforcement } from './registrationEnforcement';
import { serializeAuthenticationMethodConfiguration } from './serializeAuthenticationMethodConfiguration';
import { serializeEntity } from './serializeEntity';
import { serializeRegistrationEnforcement } from './serializeRegistrationEnforcement';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodsPolicy(writer: SerializationWriter, authenticationMethodsPolicy: AuthenticationMethodsPolicy | undefined = {} as AuthenticationMethodsPolicy) : void {
        serializeEntity(writer, authenticationMethodsPolicy)
        writer.writeCollectionOfObjectValues<AuthenticationMethodConfiguration>("authenticationMethodConfigurations", authenticationMethodsPolicy.authenticationMethodConfigurations, serializeAuthenticationMethodConfiguration);
        writer.writeStringValue("description", authenticationMethodsPolicy.description);
        writer.writeStringValue("displayName", authenticationMethodsPolicy.displayName);
        writer.writeDateValue("lastModifiedDateTime", authenticationMethodsPolicy.lastModifiedDateTime);
        writer.writeEnumValue<AuthenticationMethodsPolicyMigrationState>("policyMigrationState", authenticationMethodsPolicy.policyMigrationState);
        writer.writeStringValue("policyVersion", authenticationMethodsPolicy.policyVersion);
        writer.writeNumberValue("reconfirmationInDays", authenticationMethodsPolicy.reconfirmationInDays);
        writer.writeObjectValue<RegistrationEnforcement>("registrationEnforcement", authenticationMethodsPolicy.registrationEnforcement, serializeRegistrationEnforcement);
}
