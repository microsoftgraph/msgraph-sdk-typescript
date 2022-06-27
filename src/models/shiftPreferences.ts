import {ChangeTrackedEntity} from './changeTrackedEntity';
import {ShiftAvailability} from './shiftAvailability';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ShiftPreferences extends Partial<AdditionalDataHolder>, ChangeTrackedEntity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Availability of the user to be scheduled for work and its recurrence pattern. */
    availability?: ShiftAvailability[] | undefined;
}
