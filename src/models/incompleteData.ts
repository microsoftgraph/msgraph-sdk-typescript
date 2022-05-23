
export interface IncompleteData{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The service does not have source data before the specified time. */
    missingDataBeforeDateTime?:Date | undefined;
    /** Some data was not recorded due to excessive activity. */
    wasThrottled?:boolean | undefined;
}
