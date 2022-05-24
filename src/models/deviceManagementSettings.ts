
export interface DeviceManagementSettings{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The number of days a device is allowed to go without checking in to remain compliant. */
    deviceComplianceCheckinThresholdDays?:number | undefined;
    /** Is feature enabled or not for scheduled action for rule. */
    isScheduledActionEnabled?:boolean | undefined;
    /** Device should be noncompliant when there is no compliance policy targeted when this is true */
    secureByDefault?:boolean | undefined;
}
