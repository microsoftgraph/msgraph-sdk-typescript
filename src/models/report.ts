
export interface Report{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Report content; details vary by report type. */
    content?:string | undefined;
}
