
export interface CreateLinkPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The expirationDateTime property */
    expirationDateTime?:Date | undefined;
    /** The message property */
    message?:string | undefined;
    /** The password property */
    password?:string | undefined;
    /** The retainInheritedPermissions property */
    retainInheritedPermissions?:boolean | undefined;
    /** The scope property */
    scope?:string | undefined;
    /** The type property */
    type?:string | undefined;
}
