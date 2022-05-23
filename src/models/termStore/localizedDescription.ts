
export interface LocalizedDescription{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The description in the localized language. */
    description?:string | undefined;
    /** The language tag for the label. */
    languageTag?:string | undefined;
}
