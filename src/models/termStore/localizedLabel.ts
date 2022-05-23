
export interface LocalizedLabel{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Indicates whether the label is the default label. */
    isDefault?:boolean | undefined;
    /** The language tag for the label. */
    languageTag?:string | undefined;
    /** The name of the label. */
    name?:string | undefined;
}
