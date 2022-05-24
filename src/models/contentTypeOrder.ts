
export interface ContentTypeOrder{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Whether this is the default Content Type */
    default_escaped?:boolean | undefined;
    /** Specifies the position in which the Content Type appears in the selection UI. */
    position?:number | undefined;
}
