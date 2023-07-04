/**
 * Possible values of required passwords.
 */
export enum RequiredPasswordType {
    /** Device default value, no intent. */
    DeviceDefault = "deviceDefault",
    /** Alphanumeric password required. */
    Alphanumeric = "alphanumeric",
    /** Numeric password required. */
    Numeric = "numeric",
}
