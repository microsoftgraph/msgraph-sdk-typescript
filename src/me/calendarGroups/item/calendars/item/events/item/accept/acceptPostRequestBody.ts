
export interface AcceptPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The Comment property */
    comment?:string | undefined;
    /** The SendResponse property */
    sendResponse?:boolean | undefined;
}
