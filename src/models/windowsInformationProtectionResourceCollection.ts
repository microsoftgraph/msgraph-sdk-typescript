
export interface WindowsInformationProtectionResourceCollection{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Display name */
    displayName?:string | undefined;
    /** Collection of resources */
    resources?:string[] | undefined;
}
