/** Provides operations to manage the deviceManagement singleton. */
export enum AndroidWorkProfileCrossProfileDataSharingType {
    /** Device default value, no intent. */
    DeviceDefault = "deviceDefault",
    /** Prevent any sharing. */
    PreventAny = "preventAny",
    /** Allow data sharing request from personal profile to work profile. */
    AllowPersonalToWork = "allowPersonalToWork",
    /** No restrictions on sharing. */
    NoRestrictions = "noRestrictions",
}
