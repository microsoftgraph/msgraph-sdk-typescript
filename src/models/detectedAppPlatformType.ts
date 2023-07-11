/**
 * Indicates the operating system / platform of the discovered application.  Some possible values are Windows, iOS, macOS. The default value is unknown (0).
 */
export enum DetectedAppPlatformType {
    /** Default. Set to unknown when platform cannot be determined. */
    Unknown = "unknown",
    /** Indicates that the platform of the detected application is Windows. */
    Windows = "windows",
    /** Indicates that the platform of the detected application is Windows Mobile. */
    WindowsMobile = "windowsMobile",
    /** Indicates that the platform of the detected application is Windows Holographic. */
    WindowsHolographic = "windowsHolographic",
    /** Indicates that the platform of the detected application is iOS. */
    Ios = "ios",
    /** Indicates that the platform of the detected application is macOS. */
    MacOS = "macOS",
    /** Indicates that the platform of the detected application is ChromeOS. */
    ChromeOS = "chromeOS",
    /** Indicates that the platform of the detected application is Android open source project. */
    AndroidOSP = "androidOSP",
    /** Indicates that the platform of the detected application is Android device administrator. */
    AndroidDeviceAdministrator = "androidDeviceAdministrator",
    /** Indicates that the platform of the detected application is Android work profile. */
    AndroidWorkProfile = "androidWorkProfile",
    /** Indicates that the platform of the detected application is Android dedicated and fully managed. */
    AndroidDedicatedAndFullyManaged = "androidDedicatedAndFullyManaged",
    /** Evolvable enumeration sentinel value. Do not use. */
    UnknownFutureValue = "unknownFutureValue",
}
