/** Provides operations to manage the admin singleton. */
export enum RequiredPasswordType {
    /** Device default value, no intent. */
    DeviceDefault = "deviceDefault",
    /** Alphanumeric password required. */
    Alphanumeric = "alphanumeric",
    /** Numeric password required. */
    Numeric = "numeric",
}
