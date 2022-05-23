
export interface ItemPreviewInfo{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The getUrl property */
    getUrl?:string | undefined;
    /** The postParameters property */
    postParameters?:string | undefined;
    /** The postUrl property */
    postUrl?:string | undefined;
}
