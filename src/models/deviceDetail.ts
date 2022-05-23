
export interface DeviceDetail{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Indicates the browser information of the used for signing-in. */
    browser?:string | undefined;
    /** Refers to the UniqueID of the device used for signing-in. */
    deviceId?:string | undefined;
    /** Refers to the name of the device used for signing-in. */
    displayName?:string | undefined;
    /** Indicates whether the device is compliant or not. */
    isCompliant?:boolean | undefined;
    /** Indicates if the device is managed or not. */
    isManaged?:boolean | undefined;
    /** Indicates the OS name and version used for signing-in. */
    operatingSystem?:string | undefined;
    /** Indicates information on whether the signed-in device is Workplace Joined, AzureAD Joined, Domain Joined. */
    trustType?:string | undefined;
}
