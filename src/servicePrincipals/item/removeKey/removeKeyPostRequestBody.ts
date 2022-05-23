
export interface RemoveKeyPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The keyId property */
    keyId?:string | undefined;
    /** The proof property */
    proof?:string | undefined;
}
