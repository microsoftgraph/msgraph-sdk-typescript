
export interface SecurityVendorInformation{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Specific provider (product/service - not vendor company); for example, WindowsDefenderATP. */
    provider?:string | undefined;
    /** Version of the provider or subprovider, if it exists, that generated the alert. Required */
    providerVersion?:string | undefined;
    /** Specific subprovider (under aggregating provider); for example, WindowsDefenderATP.SmartScreen. */
    subProvider?:string | undefined;
    /** Name of the alert vendor (for example, Microsoft, Dell, FireEye). Required */
    vendor?:string | undefined;
}
