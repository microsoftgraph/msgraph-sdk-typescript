
export interface PrintMargin{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The margin in microns from the bottom edge. */
    bottom?:number | undefined;
    /** The margin in microns from the left edge. */
    left?:number | undefined;
    /** The margin in microns from the right edge. */
    right?:number | undefined;
    /** The margin in microns from the top edge. */
    top?:number | undefined;
}
