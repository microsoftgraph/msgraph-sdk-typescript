
export interface PendingContentUpdate{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Date and time the pending binary operation was queued in UTC time. Read-only. */
    queuedDateTime?:Date | undefined;
}
