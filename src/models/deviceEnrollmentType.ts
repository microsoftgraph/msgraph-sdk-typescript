/** Provides operations to manage the drive singleton.  */
export enum DeviceEnrollmentType {
    Unknown = "unknown",
    UserEnrollment = "userEnrollment",
    DeviceEnrollmentManager = "deviceEnrollmentManager",
    AppleBulkWithUser = "appleBulkWithUser",
    AppleBulkWithoutUser = "appleBulkWithoutUser",
    WindowsAzureADJoin = "windowsAzureADJoin",
    WindowsBulkUserless = "windowsBulkUserless",
    WindowsAutoEnrollment = "windowsAutoEnrollment",
    WindowsBulkAzureDomainJoin = "windowsBulkAzureDomainJoin",
    WindowsCoManagement = "windowsCoManagement",
    WindowsAzureADJoinUsingDeviceAuth = "windowsAzureADJoinUsingDeviceAuth",
    AppleUserEnrollment = "appleUserEnrollment",
    AppleUserEnrollmentWithServiceAccount = "appleUserEnrollmentWithServiceAccount",
}