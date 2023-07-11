import {SynchronizationScheduleState} from './synchronizationScheduleState';
import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationSchedule extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Date and time when this job will expire. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    expiration?: Date | undefined;
    /**
     * The interval between synchronization iterations. The value is represented in ISO 8601 format for durations. For example, PT1M represents a period of 1 month.
     */
    interval?: Duration | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The state property
     */
    state?: SynchronizationScheduleState | undefined;
}
