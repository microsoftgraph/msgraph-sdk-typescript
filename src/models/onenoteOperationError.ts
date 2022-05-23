
export interface OnenoteOperationError{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The error code. */
    code?:string | undefined;
    /** The error message. */
    message?:string | undefined;
}
