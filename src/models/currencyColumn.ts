
export interface CurrencyColumn{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Specifies the locale from which to infer the currency symbol. */
    locale?:string | undefined;
}
