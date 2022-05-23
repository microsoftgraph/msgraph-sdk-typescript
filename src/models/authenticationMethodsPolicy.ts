import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {Entity} from './entity';
import {RegistrationEnforcement} from './registrationEnforcement';

export interface AuthenticationMethodsPolicy extends Entity{
    /** Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy. */
    authenticationMethodConfigurations?:AuthenticationMethodConfiguration[] | undefined;
    /** A description of the policy. */
    description?:string | undefined;
    /** The name of the policy. */
    displayName?:string | undefined;
    /** The date and time of the last update to the policy. */
    lastModifiedDateTime?:Date | undefined;
    /** The version of the policy in use. */
    policyVersion?:string | undefined;
    /** The reconfirmationInDays property */
    reconfirmationInDays?:number | undefined;
    /** Enforce registration at sign-in time. This property can be used to remind users to set up targeted authentication methods. */
    registrationEnforcement?:RegistrationEnforcement | undefined;
}
