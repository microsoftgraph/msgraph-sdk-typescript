import {ChangeTrackedEntity} from './changeTrackedEntity';
import {ShiftAvailability} from './shiftAvailability';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ShiftPreferences extends ChangeTrackedEntity, Parsable {
    /**
     * Availability of the user to be scheduled for work and its recurrence pattern.
     */
    availability?: ShiftAvailability[] | undefined;
}
