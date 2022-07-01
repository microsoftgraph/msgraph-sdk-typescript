import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PendingContentUpdate extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Date and time the pending binary operation was queued in UTC time. Read-only. */
    queuedDateTime?: Date | undefined;
}
