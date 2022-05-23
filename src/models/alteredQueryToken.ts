
export interface AlteredQueryToken{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Defines the length of a changed segment. */
    length?:number | undefined;
    /** Defines the offset of a changed segment. */
    offset?:number | undefined;
    /** Represents the corrected segment string. */
    suggestion?:string | undefined;
}
