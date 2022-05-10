
export interface KeyValue{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** Key.  */
    key?: string | undefined;
    /** Value.  */
    value?: string | undefined;
}
