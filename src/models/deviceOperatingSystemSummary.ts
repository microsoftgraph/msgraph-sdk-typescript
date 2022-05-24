
export interface DeviceOperatingSystemSummary{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Number of android device count. */
    androidCount?:number | undefined;
    /** Number of iOS device count. */
    iosCount?:number | undefined;
    /** Number of Mac OS X device count. */
    macOSCount?:number | undefined;
    /** Number of unknown device count. */
    unknownCount?:number | undefined;
    /** Number of Windows device count. */
    windowsCount?:number | undefined;
    /** Number of Windows mobile device count. */
    windowsMobileCount?:number | undefined;
}
