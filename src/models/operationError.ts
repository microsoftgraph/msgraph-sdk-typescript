
export interface OperationError{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Operation error code. */
    code?:string | undefined;
    /** Operation error message. */
    message?:string | undefined;
}
