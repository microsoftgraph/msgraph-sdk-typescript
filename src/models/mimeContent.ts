
export interface MimeContent{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Indicates the content mime type. */
    type?:string | undefined;
    /** The byte array that contains the actual content. */
    value?:string | undefined;
}
