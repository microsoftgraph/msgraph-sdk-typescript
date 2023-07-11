import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {Fido2KeyRestrictions} from './fido2KeyRestrictions';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Fido2AuthenticationMethodConfiguration extends AuthenticationMethodConfiguration, Parsable {
    /**
     * A collection of groups that are enabled to use the authentication method.
     */
    includeTargets?: AuthenticationMethodTarget[] | undefined;
    /**
     * Determines whether attestation must be enforced for FIDO2 security key registration.
     */
    isAttestationEnforced?: boolean | undefined;
    /**
     * Determines if users can register new FIDO2 security keys.
     */
    isSelfServiceRegistrationAllowed?: boolean | undefined;
    /**
     * Controls whether key restrictions are enforced on FIDO2 security keys, either allowing or disallowing certain key types as defined by Authenticator Attestation GUID (AAGUID), an identifier that indicates the type (e.g. make and model) of the authenticator.
     */
    keyRestrictions?: Fido2KeyRestrictions | undefined;
}
