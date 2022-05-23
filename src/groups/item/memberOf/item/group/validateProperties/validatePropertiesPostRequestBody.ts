
export interface ValidatePropertiesPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The displayName property */
    displayName?:string | undefined;
    /** The mailNickname property */
    mailNickname?:string | undefined;
    /** The onBehalfOfUserId property */
    onBehalfOfUserId?:string | undefined;
}
