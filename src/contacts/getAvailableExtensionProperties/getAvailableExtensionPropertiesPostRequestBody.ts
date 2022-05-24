
export interface GetAvailableExtensionPropertiesPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The isSyncedFromOnPremises property */
    isSyncedFromOnPremises?:boolean | undefined;
}
