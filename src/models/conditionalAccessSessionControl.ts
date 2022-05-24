
export interface ConditionalAccessSessionControl{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Specifies whether the session control is enabled. */
    isEnabled?:boolean | undefined;
}
