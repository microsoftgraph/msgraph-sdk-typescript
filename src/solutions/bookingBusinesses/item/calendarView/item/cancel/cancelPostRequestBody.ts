
export interface CancelPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The cancellationMessage property */
    cancellationMessage?:string | undefined;
}
