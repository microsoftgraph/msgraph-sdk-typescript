
export interface AssignedPlan{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The date and time at which the plan was assigned; for example: 2013-01-02T19:32:30Z. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    assignedDateTime?:Date | undefined;
    /** Condition of the capability assignment. The possible values are Enabled, Warning, Suspended, Deleted, LockedOut. */
    capabilityStatus?:string | undefined;
    /** The name of the service; for example, exchange. */
    service?:string | undefined;
    /** A GUID that identifies the service plan. For a complete list of GUIDs and their equivalent friendly service names, see Product names and service plan identifiers for licensing. */
    servicePlanId?:string | undefined;
}
