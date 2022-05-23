
export interface SpecialFolder{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The unique identifier for this item in the /drive/special collection */
    name?:string | undefined;
}
