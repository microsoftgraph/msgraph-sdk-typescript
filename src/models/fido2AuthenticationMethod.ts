import {AttestationLevel} from './attestationLevel';
import {AuthenticationMethod} from './authenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Fido2AuthenticationMethod extends AuthenticationMethod, Parsable {
    /**
     * Authenticator Attestation GUID, an identifier that indicates the type (e.g. make and model) of the authenticator.
     */
    aaGuid?: string | undefined;
    /**
     * The attestation certificate(s) attached to this security key.
     */
    attestationCertificates?: string[] | undefined;
    /**
     * The attestation level of this FIDO2 security key. Possible values are: attested, or notAttested.
     */
    attestationLevel?: AttestationLevel | undefined;
    /**
     * The timestamp when this key was registered to the user.
     */
    createdDateTime?: Date | undefined;
    /**
     * The display name of the key as given by the user.
     */
    displayName?: string | undefined;
    /**
     * The manufacturer-assigned model of the FIDO2 security key.
     */
    model?: string | undefined;
}
