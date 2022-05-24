
export interface ImplicitGrantSettings{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow. */
    enableAccessTokenIssuance?:boolean | undefined;
    /** Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow. */
    enableIdTokenIssuance?:boolean | undefined;
}
