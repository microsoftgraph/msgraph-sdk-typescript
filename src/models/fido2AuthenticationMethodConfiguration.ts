import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {Fido2KeyRestrictions} from './fido2KeyRestrictions';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Fido2AuthenticationMethodConfiguration extends Partial<AdditionalDataHolder>, AuthenticationMethodConfiguration, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A collection of users or groups who are enabled to use the authentication method. */
    includeTargets?: AuthenticationMethodTarget[] | undefined;
    /** Determines whether attestation must be enforced for FIDO2 security key registration. */
    isAttestationEnforced?: boolean | undefined;
    /** Determines if users can register new FIDO2 security keys. */
    isSelfServiceRegistrationAllowed?: boolean | undefined;
    /** Controls whether key restrictions are enforced on FIDO2 security keys, either allowing or disallowing certain key types as defined by Authenticator Attestation GUID (AAGUID), an identifier that indicates the type (e.g. make and model) of the authenticator. */
    keyRestrictions?: Fido2KeyRestrictions | undefined;
}
