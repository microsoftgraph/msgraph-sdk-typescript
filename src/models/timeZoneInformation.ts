
export interface TimeZoneInformation{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** An identifier for the time zone. */
    alias?:string | undefined;
    /** A display string that represents the time zone. */
    displayName?:string | undefined;
}
