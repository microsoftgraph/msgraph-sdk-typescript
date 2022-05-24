
export interface LocalizedName{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The language tag for the label. */
    languageTag?:string | undefined;
    /** The name in the localized language. */
    name?:string | undefined;
}
