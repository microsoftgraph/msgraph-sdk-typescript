
export interface SamlSingleSignOnSettings{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The relative URI the service provider would redirect to after completion of the single sign-on flow. */
    relayState?:string | undefined;
}
