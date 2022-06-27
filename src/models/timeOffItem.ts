import {ScheduleEntity} from './scheduleEntity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffItem extends Partial<AdditionalDataHolder>, Partial<Parsable>, ScheduleEntity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** ID of the timeOffReason for this timeOffItem. Required. */
    timeOffReasonId?: string | undefined;
}
