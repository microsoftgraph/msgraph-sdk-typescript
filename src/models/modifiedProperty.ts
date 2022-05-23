
export interface ModifiedProperty{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Name of property that was modified. */
    displayName?:string | undefined;
    /** New property value. */
    newValue?:string | undefined;
    /** Old property value. */
    oldValue?:string | undefined;
}
