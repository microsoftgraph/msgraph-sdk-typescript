
export interface RgbColor{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Blue value */
    b?:number | undefined;
    /** Green value */
    g?:number | undefined;
    /** Red value */
    r?:number | undefined;
}
