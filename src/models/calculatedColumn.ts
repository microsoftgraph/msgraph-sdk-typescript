
export interface CalculatedColumn{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** For dateTime output types, the format of the value. Must be one of dateOnly or dateTime. */
    format?:string | undefined;
    /** The formula used to compute the value for this column. */
    formula?:string | undefined;
    /** The output type used to format values in this column. Must be one of boolean, currency, dateTime, number, or text. */
    outputType?:string | undefined;
}
