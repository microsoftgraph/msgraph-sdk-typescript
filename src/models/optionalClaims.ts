import {OptionalClaim} from './optionalClaim';

export interface OptionalClaims{
    /** The optional claims returned in the JWT access token. */
    accessToken?:OptionalClaim[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The optional claims returned in the JWT ID token. */
    idToken?:OptionalClaim[] | undefined;
    /** The optional claims returned in the SAML token. */
    saml2Token?:OptionalClaim[] | undefined;
}
