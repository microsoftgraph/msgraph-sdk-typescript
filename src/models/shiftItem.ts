import {ScheduleEntity} from './scheduleEntity';
import {ShiftActivity} from './shiftActivity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ShiftItem extends Partial<AdditionalDataHolder>, Partial<Parsable>, ScheduleEntity {
    /** An incremental part of a shift which can cover details of when and where an employee is during their shift. For example, an assignment or a scheduled break or lunch. Required. */
    activities?: ShiftActivity[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The shift label of the shiftItem. */
    displayName?: string | undefined;
    /** The shift notes for the shiftItem. */
    notes?: string | undefined;
}
