import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {AuthenticationMethodsPolicyMigrationState} from './authenticationMethodsPolicyMigrationState';
import {Entity} from './entity';
import {RegistrationEnforcement} from './registrationEnforcement';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodsPolicy extends Entity, Parsable {
    /**
     * Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.
     */
    authenticationMethodConfigurations?: AuthenticationMethodConfiguration[] | undefined;
    /**
     * A description of the policy. Read-only.
     */
    description?: string | undefined;
    /**
     * The name of the policy. Read-only.
     */
    displayName?: string | undefined;
    /**
     * The date and time of the last update to the policy. Read-only.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The state of migration of the authentication methods policy from the legacy multifactor authentication and self-service password reset (SSPR) policies. The possible values are: premigration - means the authentication methods policy is used for authentication only, legacy policies are respected. migrationInProgress - means the authentication methods policy is used for both authentication and SSPR, legacy policies are respected. migrationComplete - means the authentication methods policy is used for authentication and SSPR, legacy policies are ignored. unknownFutureValue - Evolvable enumeration sentinel value. Do not use.
     */
    policyMigrationState?: AuthenticationMethodsPolicyMigrationState | undefined;
    /**
     * The version of the policy in use. Read-only.
     */
    policyVersion?: string | undefined;
    /**
     * The reconfirmationInDays property
     */
    reconfirmationInDays?: number | undefined;
    /**
     * Enforce registration at sign-in time. This property can be used to remind users to set up targeted authentication methods.
     */
    registrationEnforcement?: RegistrationEnforcement | undefined;
}
