
export interface ResultInfo{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The result code. */
    code?:number | undefined;
    /** The message. */
    message?:string | undefined;
    /** The result sub-code. */
    subcode?:number | undefined;
}
