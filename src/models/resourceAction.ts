
export interface ResourceAction{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Allowed Actions */
    allowedResourceActions?:string[] | undefined;
    /** Not Allowed Actions. */
    notAllowedResourceActions?:string[] | undefined;
}
