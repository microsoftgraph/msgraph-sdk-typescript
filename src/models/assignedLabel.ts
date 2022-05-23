
export interface AssignedLabel{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The display name of the label. Read-only. */
    displayName?:string | undefined;
    /** The unique identifier of the label. */
    labelId?:string | undefined;
}
