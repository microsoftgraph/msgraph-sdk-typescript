/**
 * Possible values for firewallPreSharedKeyEncodingMethod
 */
export enum FirewallPreSharedKeyEncodingMethodType {
    /** No value configured by Intune, do not override the user-configured device default value */
    DeviceDefault = "deviceDefault",
    /** Preshared key is not encoded. Instead, it is kept in its wide-character format */
    None = "none",
    /** Encode the preshared key using UTF-8 */
    UtF8 = "utF8",
}
