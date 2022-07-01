import {AdditionalDataHolder, Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface BookingWorkTimeSlot extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The time of the day when work stops. For example, 17:00:00.0000000. */
    endTime?: TimeOnly | undefined;
    /** The time of the day when work starts. For example, 08:00:00.0000000. */
    startTime?: TimeOnly | undefined;
}
