
export interface AssignUserToDevicePostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The addressableUserName property */
    addressableUserName?:string | undefined;
    /** The userPrincipalName property */
    userPrincipalName?:string | undefined;
}
