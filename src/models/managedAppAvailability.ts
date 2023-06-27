/**
 * A managed (MAM) application's availability.
 */
export enum ManagedAppAvailability {
    /** A globally available app to all tenants. */
    Global = "global",
    /** A line of business apps private to an organization. */
    LineOfBusiness = "lineOfBusiness",
}
