import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {AuthenticationMethodsPolicy} from './authenticationMethodsPolicy';
import {AuthenticationMethodsPolicyMigrationState} from './authenticationMethodsPolicyMigrationState';
import {createAuthenticationMethodConfigurationFromDiscriminatorValue} from './createAuthenticationMethodConfigurationFromDiscriminatorValue';
import {createRegistrationEnforcementFromDiscriminatorValue} from './createRegistrationEnforcementFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {RegistrationEnforcement} from './registrationEnforcement';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeRegistrationEnforcement} from './serializeRegistrationEnforcement';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodsPolicy(authenticationMethodsPolicy: AuthenticationMethodsPolicy | undefined = {} as AuthenticationMethodsPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationMethodsPolicy),
        "authenticationMethodConfigurations": n => { authenticationMethodsPolicy.authenticationMethodConfigurations = n.getCollectionOfObjectValues<AuthenticationMethodConfiguration>(createAuthenticationMethodConfigurationFromDiscriminatorValue); },
        "description": n => { authenticationMethodsPolicy.description = n.getStringValue(); },
        "displayName": n => { authenticationMethodsPolicy.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { authenticationMethodsPolicy.lastModifiedDateTime = n.getDateValue(); },
        "policyMigrationState": n => { authenticationMethodsPolicy.policyMigrationState = n.getEnumValue<AuthenticationMethodsPolicyMigrationState>(AuthenticationMethodsPolicyMigrationState); },
        "policyVersion": n => { authenticationMethodsPolicy.policyVersion = n.getStringValue(); },
        "reconfirmationInDays": n => { authenticationMethodsPolicy.reconfirmationInDays = n.getNumberValue(); },
        "registrationEnforcement": n => { authenticationMethodsPolicy.registrationEnforcement = n.getObjectValue<RegistrationEnforcement>(createRegistrationEnforcementFromDiscriminatorValue); },
    }
}
