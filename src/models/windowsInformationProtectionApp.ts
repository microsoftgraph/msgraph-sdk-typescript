
export interface WindowsInformationProtectionApp{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** If true, app is denied protection or exemption. */
    denied?:boolean | undefined;
    /** The app's description. */
    description?:string | undefined;
    /** App display name. */
    displayName?:string | undefined;
    /** The product name. */
    productName?:string | undefined;
    /** The publisher name */
    publisherName?:string | undefined;
}
