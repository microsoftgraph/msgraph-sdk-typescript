
export interface AlertTrigger{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Name of the property serving as a detection trigger. */
    name?:string | undefined;
    /** Type of the property in the key:value pair for interpretation. For example, String, Boolean etc. */
    type?:string | undefined;
    /** Value of the property serving as a detection trigger. */
    value?:string | undefined;
}
