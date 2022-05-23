
export interface ContentTypeInfo{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The id of the content type. */
    id?:string | undefined;
    /** The name of the content type. */
    name?:string | undefined;
}
