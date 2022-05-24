
export interface IntegerRange{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The inclusive upper bound of the integer range. */
    end?:number | undefined;
    /** The inclusive lower bound of the integer range. */
    start?:number | undefined;
}
